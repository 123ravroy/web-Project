import React from 'react'
import Home from './comp/home'
import Product from './comp/product'
import Product1 from './comp/product1'
import Product3 from './comp/product3'
import Account from './comp/account'
import Login from './comp/login'
import Signup from './comp/signup'
import Payment from './comp/payment'
import Address from './comp/address'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product1' element={<Product1 />} />
      <Route path='/product3' element={<Product3 />} />
      <Route path='/account' element={<Account />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/address' element={<Address />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App