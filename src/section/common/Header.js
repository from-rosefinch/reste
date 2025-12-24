import { RiSofaLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [ menuDrop, setMenuDrop ] = useState(false);

  return (
    <div id="header"
      onMouseEnter={() => setMenuDrop(true)}
      onMouseLeave={() => setMenuDrop(false)}>

      <div className="icon-down">
        <IoIosArrowDropdown />
      </div>

      <nav className={`nav ${menuDrop ? "open" : ""}`}>
        <div className="icon-sofa">
          <RiSofaLine />
        </div>
        <div className="search">
          <input type="text" placeholder="검색"/>
          <IoSearch />
        </div>
        <div className="icon-cart">
          <FiShoppingCart />
        </div>
      </nav>

    </div>
  )
}

export default Header