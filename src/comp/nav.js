// import React from 'react'
import './style.css'
import { AiOutlinePoweroff } from "react-icons/ai";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <Link className='loginedit' to='/login'><AiOutlinePoweroff /></Link> 
            <h5>sign up</h5>
        </div>
        <h1 className='heading'>SHOPPING</h1>
        <ul>
            <li><Link className='Link' to='/'>HOME</Link></li>
            <li><Link className='Link' to='/product'>HIS</Link></li>
            <li><Link className='Link' to='/product1'>HER</Link></li>
            <li><Link className='Link' to='/product3'>KIDS</Link></li>
        </ul>
    </div>
  )
}

export default Nav