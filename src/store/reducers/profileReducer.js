import * as types from '../consts/consts'

const initialState = {
  name: 'Name',
  visible: true,
}

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: payload,
      }
    case types.CONTENT_TOGGLE:
      return {
        ...state,
        visible: payload,
      }
    default:
      return state
  }
}
