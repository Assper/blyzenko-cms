import { createStore, compose, combineReducers } from 'redux'
import { reducer as shops } from './reducers/shops'

const rootReducer = combineReducers({
  shops
})

export const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
