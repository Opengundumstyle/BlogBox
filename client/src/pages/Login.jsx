import React,{useContext, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs,setInputs]  = useState({
    username:"",
    password:"",
  })

  const navigate = useNavigate()

  const {login,currentUser} = useContext(AuthContext)
   console.log('what is currentUser',currentUser)

  const handleChange =  (e) =>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e)=>{
        e.preventDefault()
        try{

          await login(inputs)
          
          navigate('/')
        }catch(err){ 
          
        }
  }


  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
         <input required type="text" placeholder='username'name="username" onChange={handleChange}/>
         <input required type="password" placeholder='password'name="password" onChange={handleChange}/>
         <button onClick={handleSubmit}>Login</button>
         <p>This is an error!</p>
         <span>Don't have an account? <Link to="/register">Register</Link></span> 
      </form>
    </div>
  )
}

export default Login
