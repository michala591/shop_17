import { useContext } from "react"
import CartCotext from "../CartContext"

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
        </div>
    )
}

export default Cart