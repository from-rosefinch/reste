import MainVideo from "../section/main/MainVideo";
import ProductMD from "../section/main/ProductMD";
import BestItem from "../section/main/BestItem";
import BrandPR from "../section/main/BrandPR";
import { IoIosArrowDropdown } from "react-icons/io";

const MainPage = () => {
  return (
    <div id="main-page">
      <IoIosArrowDropdown />
      <MainVideo />
      <ProductMD />
      <BestItem />
      <BrandPR />
    </div>
  )
}

export default MainPage