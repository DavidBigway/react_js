import { createStore, compose, combineReducers } from 'redux'
import { chatReducer } from './reducers/chatReducer'
import { profileReducer } from './reducers/profileReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
})

export const store = createStore(rootReducer, composeEnhancers())
