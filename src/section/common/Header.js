import { RiSofaLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Header.scss";

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
          <FiShoppingCart className="icon" />
        </div>
      </nav>
      <IoIosArrowDropdown />
    </div>
  )
}

export default Header