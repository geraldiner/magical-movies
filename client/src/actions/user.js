import axios from 'axios'
import { LOGIN_USER, LOGOUT } from './types'

const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://magical-movies.herokuapp.com/login'

export async function loginUser(email, password) {
  let req = await axios({
    type: LOGIN_USER,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      email: email,
      password: password
    },
    withCredentials: true,
    url: LOGIN_URI
  })
  let resp = await req.json()
  console.log(resp)
}

export default loginUser