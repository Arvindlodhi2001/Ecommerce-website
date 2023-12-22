import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const data = [
    {
      img: "https://img.freepik.com/premium-psd/black-friday-wrist-watch-sale-facebook-cover-web-banner-template_182992-82.jpg?w=1600 ",
      title: "Title 1",
    },
    {
      img: "https://img.freepik.com/premium-vector/fashion-facebook-cover-page-web-banner-template_649429-142.jpg?w=1600",
      title: "Title 2",
    },
    {
      img: "https://img.freepik.com/premium-vector/promotion-fashion-sale-web-banner-template_519207-32.jpg?w=1600",
      title: "Title 3",
    },
    {
      img: "https://img.freepik.com/premium-psd/winter-fashion-sale-social-media-horizontal-web-banner-facebook-cover-photo-template_263626-248.jpg?w=1600",
      title: "Title 4",
    },
    {
      img: "https://img.freepik.com/premium-vector/modern-furniture-sale-facebook-cover-banner-template-social-media-web-banner-layout_551826-369.jpg?w=1600",
      title: "Title 5",
    },
  ];

  const items =
    data &&
    data.map((item, key) => (
      <img
        src={item.img}
        alt={item.title}
        key={key}
        className="cursor-pointer object-cover w-full h-96 sm:w-full sm:h-80 md:h-96 lg:h-650 mt-2 -z-10"
        role={"presentation"}
      />
    ));
  return (
    <div className="z-1">
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2500}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
