import React from 'react'

const SIGNUP_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/signup' : 'https://magical-movies.herokuapp.com/signup'

export const SignUp = () => {
  return (
    <div>
      <form action={SIGNUP_URI} method="POST">
        <section>
          <label for="name" class="form-label">First Name</label>
          <input type="text" class="form-control" id="name" name="name" />
        </section>
        <section>
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" />
        </section>
        <section>
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" />
        </section>
        <section>
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" />
        </section>
        <a href="/" class="btn">Go Back</a>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp