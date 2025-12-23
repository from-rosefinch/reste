import CartContents from "../section/cart/CartContents";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiSofaLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";


import "./cart.scss";


const CartPage = () => {
  return (
    <div id="cart-page">
      <div className="top">
        <h1>MY CART</h1>
      </div>
      <div className="middle">
        <CartContents />
      </div>
      <div className="buy">
        <div>
          <h3>￦</h3> 
          <p>Total</p>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  )
}

export default CartPage