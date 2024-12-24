import './App.css'
import { useState } from 'react'
import Cart from './components/Cart'
import CartCotext from './CartContext'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <CartCotext.Provider value={{ cart, setCart }}>
            <Jumbotron />
            <Navbar />
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<><h1>this is about page</h1></>} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </CartCotext.Provider>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App