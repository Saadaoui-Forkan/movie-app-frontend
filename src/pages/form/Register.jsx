import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Api_Url } from '../../utils';
import Error from '../../components/error/Error';

function Register() {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${Api_Url}/users/register`, formData);
      setFormData(res.data)
    } catch (error) {
      setError(error.response.data.errors[0].msg)
    }
    setFormData({
      name: "",
      email: "",
      password: "",
    })
  }

  return (
    <div className="center">
      <form onSubmit={(e)=>handleSubmit(e)}>
        {error && <Error error={error}/>}
        <div className="txt_field">
          <input 
            type="text" 
            onChange={onChange} 
            value={name} 
            name="name" 
          />
          <span></span>
          <label>Name</label>
        </div>
        <div className="txt_field">
          <input type="text" 
            onChange={onChange} 
            value={email} 
            name="email" 
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input 
            type="password" 
            onChange={onChange} 
            value={password} 
            name="password" 
          />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Already have account?
          <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register