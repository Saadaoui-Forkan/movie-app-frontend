import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="center">
      {/* <h1>Login</h1> */}
      <form >
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
        <div className="signup_link">
            Already have account? 
            <Link to='/login'> Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register