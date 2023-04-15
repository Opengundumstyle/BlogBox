import React from 'react'
import Logo from '../img/blogbox-logo.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
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
            <h6>DESIGN</h6>
            </Link>
            <Link className='link' to="/?cat=art">
            <h6>FOOD</h6>
            </Link>
            <span>Brian</span>
            <span>Logout</span>
            <span className='write'>
               <Link to="write" className='link'>Write</Link>
            </span>
         </div>
      </div>
    </div>
  )
}

export default NavBar
