import * as types from '../consts/consts'

export const addNewChat = (payload) => ({
  type: types.ADD_NEW_CHAT,
  payload,
})
export const addNewMessage = (payload) => ({
  type: types.ADD_NEW_MESSAGE,
  payload,
})
