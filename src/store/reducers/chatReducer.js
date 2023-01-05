import { nanoid } from 'nanoid'
import * as types from '../consts/consts'
const initialState = [
  {
    id: nanoid(),
    chatName: 'bot',
    chatHistory: [
      {
        id: nanoid(),
        autor: 'bot',
        text: 'Добро пожаловать в чат с ботом',
      },
    ],
  },
]

export const chatReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.ADD_NEW_CHAT:
      return [...state, payload]

    case types.ADD_NEW_MESSAGE:
      const idx = state.indexOf(
        state.find((chat) => chat.id === payload.chatId)
      )
      state[idx].chatHistory = [...state[idx].chatHistory, payload.chatHistory]
      return [...state]

    default:
      return state
  }
}

/* state[state.indexOf(state.find((chat) => chat.id === payload.chatId)) ]*/
