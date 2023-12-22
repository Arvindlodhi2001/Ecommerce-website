import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Button from "@mui/material/Button";

const ProductCarousel = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const responsive = {
    0: { items: 0 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  let syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  useEffect(() => {
    console.log("activeIndex -->", activeIndex);
  }, [activeIndex]);

  const data = [
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/6/7/s-pl-b-w-ruhi-original-imagnvyyh2znxacg.jpeg?q=90",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/g/e/m/m-m-black-nayalkaran-original-imagznne5h9yznen.jpeg?q=20",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6b5/-1117Wx1400H-461119105-blue-MODEL.jpg",
      title: "DENNISLINGO PREMIUM ATTIRE",
      description: "Men Slim Fit Shirt with Band Collar",
    },
  ];

  return (
    <div className="relative px-4 lg:px-8">
      <h1 className="text-2xl  font-extrabold text-gray-800 ">{title}</h1>
      <div className="relative p-5 border flex justify-between">
        <AliceCarousel
          mouseTracking
          items={data.map((item, key) => (
            <div
              key={key}
              className="cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[17rem] mx-10 border border-black-500"
            >
              <div className="h-[18rem] w-[17rem]">
                <img
                  className="object-cover object-top w-full h-full"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          // onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(-50%, -50%) rotate(-90deg)",
              backgroundColor: "white",
              color: "black",
            }}
            aria-label="prev"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
        {activeIndex !== data.length - 5 && (
          <Button
            variant="contained"
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%) rotate(90deg)",
              backgroundColor: "white",
              color: "black",
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
