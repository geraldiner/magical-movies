import { combineReducers } from 'redux'
import user from './user'
import auth from './auth'
import movies from './movies'

const rootReducer = combineReducers({
  user,
  auth
})

export default rootReducer