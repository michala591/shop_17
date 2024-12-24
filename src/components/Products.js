import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CartCotext from '../CartContext'

function Products() {
    const [products, setProducts] = useState([])
    const { cart, setCart } = useContext(CartCotext)

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        axios.get('http://127.0.0.1:8000/products/').then((response) => {
            setProducts(response.data)
        })
    }

    function addToCart(product) {
        const existingProduct = cart.find((cartProduct) => cartProduct === product)
        if (!existingProduct) {
            setCart([...cart, product])
            console.log('cart is', cart)
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