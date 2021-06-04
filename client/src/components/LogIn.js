import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://magical-movies.herokuapp.com/login'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState(null)
  const history = useHistory('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      let resp = await axios({
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
      console.log(resp)
      setData(resp.data)
      history.push('/about')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <section>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email"
            aria-describedby="emailHelp" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </section>
        <section>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </section>
        <a href="/" className="btn">Go Back</a>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LogIn
