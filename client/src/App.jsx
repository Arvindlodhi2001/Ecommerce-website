import "./App.css";
import "./../src/index.css";
import Navbar from "./Customer/Component/Navbar";
import HomePage from "./Customer/Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Customer/Component/Carousel/Product/Product";
import ProductDetail from "./Customer/Component/ProductDetail/ProductDetails";
function App() {
  return (
    <>
      <div className="bg-[#edf3fc] ">
        <Navbar />
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetail />
      </div>
    </>
  );
}

export default App;
