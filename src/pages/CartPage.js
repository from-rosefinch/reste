import { useEffect,useState } from "react";
import CartContents from "../section/cart/CartContents";
import "./cart.scss";


const CartPage = ({cartItems,onUpdate,onDelete}) => {
  

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {

    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);
  return (
    <div id="cart-page">
      <div className="top">
        <h1>MY CART</h1>
      </div>
      <div className="middle">
        <CartContents cartItems={cartItems} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
      <div className="buy">
        <div>
          <span>￦ {Number(totalPrice).toLocaleString()}</span> 
          <span>Total</span>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  )
}

export default CartPage