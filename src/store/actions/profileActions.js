import * as types from '../consts/consts'

export const changeName = (payload) => ({
  type: types.CHANGE_NAME,
  payload,
})
export const contentToggle = (payload) => ({
  type: types.CONTENT_TOGGLE,
  payload,
})
