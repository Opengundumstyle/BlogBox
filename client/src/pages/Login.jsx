import React from 'react'

const login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
         <input type="text" placeholder='username'/>
         <input type="password" placeholder='password'/>
         <button>Login</button>
      </form>
    </div>
  )
}

export default login
