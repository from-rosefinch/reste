import MainVideo from "../section/main/MainVideo";
import ProductMD from "../section/main/ProductMD";
import BestItem from "../section/main/BestItem";
import BrandPR from "../section/main/BrandPR";
import { useEffect, useState } from "react";
import productList from "../../src/assets/data/products.json"
const MainPage = ({ onAdd }) => {
  const [bestItems,setBestItems] = useState([]);
    useEffect(()=>{
      // isBest값이 true 상태목록만 저장
      const items = productList.filter((item)=>{
        return item.isBest === true;
      });
      // slice처리를 해서 베스트 아이템을 8개만.
      setBestItems(items.slice(0,8));
    },[]);
    
  return (
    <div id="main-page" >
      <MainVideo />
      {
          bestItems.map((item)=>{
            return (
      <ProductMD 
                key={item.id}
                item={item}
                onAdd={onAdd} />)})}
      <BestItem />
      <BrandPR />
    </div>
  )
}

export default MainPage