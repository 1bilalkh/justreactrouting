import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                Logo
            </div>
       
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
            </ul>
        </nav>
        </div>
      <Outlet />
    </>
  )
}

export default Navbar