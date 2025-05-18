import React from 'react'
import './style.css'
import Nav from './nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Nav />
        <div className='home2'>
            <Link to="/account"><button className='account1'>ACCOUNT  👤</button></Link>
            <Link to="/cart"><button className='account1'>YOUR CART 🛒</button></Link>
        </div>

        <div className='homeedit'>
           <img className='homeedit2' src="./img/home1.jpg" alt="home" />;
        </div>
    </div>
  )
}

export default Home;


