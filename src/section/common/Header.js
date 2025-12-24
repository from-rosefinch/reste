import { RiSofaLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <nav>
        <div className="icon-sofa">
          <RiSofaLine className="icon" />
        </div>
        <div className="search">
          <input type="text" placeholder="검색"/>
          <IoSearch className="icon-search"/>
        </div>
        <div className="icon-cart">
          <Link to="/cart"><FiShoppingCart className="icon"/></Link>
        </div>
      </nav>
    </div>
  )
}

export default Header