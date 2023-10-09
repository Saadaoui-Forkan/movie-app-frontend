import React from 'react'
import './error.css'

function Error({error}) {
  return (
    <div className='error'>
        <p className='error-text'>{error}</p>
    </div>
  )
}

export default Error