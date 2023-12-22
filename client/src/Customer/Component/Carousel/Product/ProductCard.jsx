import React from "react";
import "../Product/productCard.css";
const ProductCard = () => {
  return (
    <div className="productCard w-[17.3rem] m-6 transition-all cursor-pointer rounded-xl shadow-lg">
      <div className="h-[22rem] ">
        <img
          className={"h-full w-full object-cover object-left-top"}
          src="https://5.imimg.com/data5/SELLER/Default/2023/4/301339062/AP/TY/WN/7175905/oversized-crop-t-shirt-girls-1000x1000.jpg"
          alt=""
        />
      </div>
      <div className="bg-green-600">
        <div className="textPart bg-white p-3 ">
          <div>
            <p className=" font-bold opacity-60 ">Half Sleeve Oversized</p>
            <p className="opacity-40">
              Half Sleeve Oversized Crop Printed T-Shirt Girls, Daily Wear
            </p>
          </div>
          <div className="font-semibold flex item-center space-x-6 ">
            <p>₹4999.00</p>
            <del className="opacity-50"> ₹7999.00</del>
            <p className=" text-green-600 ">70% Off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
