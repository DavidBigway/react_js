import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { chatReducer } from './reducers/chatReducer'
import { profileReducer } from './reducers/profileReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
