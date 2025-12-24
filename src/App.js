import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import DetailPage from "./pages/DetailPage"
import "../src/assets/scss/global.scss"
import { useState } from "react"
import products from "../src/assets/data/products.json";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (Productdetail) =>{

    const base = products.find((p) => p.id === Productdetail.id);

  if (!base) {
    console.error("[App] products.json에 해당 id 없음:", Productdetail.id);
    return;
  }

  // cart에는 products.json 기준으로 넣기 (이미지 포함)
  const cartProduct = {
    id: base.id,
    title: base.title,
    price: base.price,
    image: base.image, // CartContents가 쓰는 필드
  };

  setCartItems((prev) => {
    const existItem = prev.find((item) => item.id === cartProduct.id);
    if (existItem) {
      return prev.map((cart) =>
        cart.id === cartProduct.id
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
    }
    return [...prev, { ...cartProduct, quantity: 1 }];
  });
};
  const handleUpdateQuantity = (id, type) => {
    setCartItems((prev) => {
      if (type === "plus") {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      if (type === "minus") {
        return prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); // 0 되면 삭제
      }

      return prev;
    });
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage onAdd={handleAddCart} />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage 
              cartItems={cartItems}
                onUpdate={handleUpdateQuantity}
                onDelete={handleDelete}/>} />
          <Route path="/detail/:id" element={<DetailPage onAdd={handleAddCart}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App