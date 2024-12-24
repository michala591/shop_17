import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../CartContext' // Fixed typo
import { useNavigate } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([])
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        axios.get('http://127.0.0.1:8000/products/')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.error('Error fetching products:', error)
            })
    }

    function addToCart(product) {
        const existingProduct = cart.find((cartProduct) => cartProduct.id === product.id) // Compare by unique ID
        if (!existingProduct) {
            const updatedCart = [...cart, product]
            setCart(updatedCart)
            console.log('Updated cart:', updatedCart) // Log the updated cart state
            navigate("/cart") // Redirect to the cart page
        }
    }
    return (
        <div className='product-container'>
            {products.map((product, index) => (
                <div key={index} className="col-sm-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">{product.name}</div>
                        <div className="panel-body"><img src={product.image} alt={product.name} className="img-responsive" style={{ width: "100%" }} /></div>
                        <div className="panel-footer">${product.price}</div>
                        <button className='fetch-button' onClick={() => addToCart(product)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products