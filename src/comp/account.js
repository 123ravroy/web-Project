import React from 'react'
import './style.css'
import Nav from './nav'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
  <div>
    <Nav />

  <div className="account-container">
    <h2>Account</h2>
    <div className="button-group">
      <Link to="/address" className='rara'><div className="account-button">Addresses</div></Link>
      <Link to="/payment" className='rara'><div className="account-button">Payments</div></Link>
    </div>
  </div>
  </div>    
  )
}

export default Account