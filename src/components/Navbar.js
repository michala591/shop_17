import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartCotext from '../CartContext'

function Navbar() {
    const { cart, setCart } = useContext(CartCotext)

    return (
        <div><nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li className="active"><Link to="/about">About</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/login">
                                <span class='glyphicon glyphicon-user'></span> Your Account
                            </Link>
                        </li>
                        <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart: {cart.length}</Link></li>
                    </ul>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar