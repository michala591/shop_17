import { useContext } from "react"
import CartCotext from "../CartContext"
import { Link } from "react-router-dom"

function Cart() {
    const { cart, setCart } = useContext(CartCotext)
    return (
        <div className='cart-container'>
            <h1 className='cart-title'>Cart:</h1>
            <h1 className='cart-title'>products in the cart: {cart.length}</h1>
            {cart.length > 0 ? (
                cart.map((product, index) => (
                    <div key={index} className='cart-item'>
                        <img src={product.image} alt={product.name} className='cart-item-image' />
                        <div className='cart-item-details'>
                            <h3 className='cart-item-name'>{product.name}</h3>
                            <p className='cart-item-price'>${product.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className='cart-empty'>Your cart is empty</p>
            )}
            <Link to="/">
                <button className='fetch-button'>
                    Continue shopping
                </button>
            </Link>
        </div>
    )
}

export default Cart