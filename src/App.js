import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import "../src/assets/scss/global.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App