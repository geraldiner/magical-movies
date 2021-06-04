import { combineReducers } from 'redux'
import user from './user'
import movies from './movies'

const rootReducer = combineReducers({
  user
})

export default rootReducer