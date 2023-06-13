import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const noOfItemsInCart = cartList.length
      const result = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      let totalPrice = 0
      result.forEach(element => {
        totalPrice += element
      })

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total:
            <span className="cart-summary-order-total"> Rs {totalPrice}/-</span>
          </h1>
          <p className="cart-summary-no-of-items">
            {noOfItemsInCart} Items in cart
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
