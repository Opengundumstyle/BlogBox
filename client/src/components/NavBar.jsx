import React, { useContext } from 'react'
import Logo from '../img/blogbox-logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const NavBar = () => {
 
  const {currentUser,logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="container">
         <Link to='/'>
         <div className="logo">
             <img src={Logo} alt="logo" style={{width:"150px"}}/>
         </div>
         </Link>
         <div className="links">
            <Link className='link' to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className='link' to="/?cat=art">
              <h6>SCIENCE</h6> 
            </Link>
            <Link className='link' to="/?cat=art">
            <h6>TECHNOLOGY</h6>
            </Link>
            <Link className='link' to="/?cat=art">
            <h6>CENIMA</h6>
            </Link>
            <Link className='link' to="/?cat=art">
            <h6>MUSIC</h6>
            </Link>
            <Link className='link' to="/?cat=art">
            <h6>FOOD</h6>
            </Link>
            <Link className='link' to="/?cat=art">
            <h6>BUSINESS</h6>
            </Link>
            <span>{currentUser?.username}</span>
            {currentUser?(<span onClick={logout}>Sign out</span>) : <Link className='link' to="/login">Login</Link>}
            <span className='write'>
               <Link to="write" className='link'>Write</Link>
            </span>
         </div>
      </div>
    </div>
  )
}

export default NavBar
