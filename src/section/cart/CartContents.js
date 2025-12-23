import "../../pages/cart.scss";
import { PiEmpty } from "react-icons/pi";

const CartContents = () => {
  return (
    <section className="cart-contents">
      <div className="empty">
        <h1>EMPTY</h1>
        <PiEmpty className="icon"/>
      </div>
    </section>
  )
}

export default CartContents