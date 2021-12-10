import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const BrandSlider = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item flex justify-center items-center" data-value="1">
      <img className="w-full" src="/assets/logo/logo-1.png" role="presentation" alt="slide1" />
    </div>,
    <div className="item flex justify-center items-center" data-value="2">
      <img className="" src="/assets/logo/logo-2.png" role="presentation" alt="slide2" />
    </div>,
    <div className="item flex justify-center items-center"data-value="3">
      <img className="" src="/assets/logo/logo-3.png" role="presentation" alt="slide3" />
    </div>,
    <div className="item flex justify-center items-center" data-value="4">
      <img className="" src="/assets/logo/logo-4.png" role="presentation" alt="slide4" />
    </div>,
    <div className="item flex justify-center items-center" data-value="5">
      <img className="" src="/assets/logo/logo-5.png" role="presentation" alt="slide5" />
    </div>,
    <div className="item flex justify-center items-center" data-value="6">
      <img className="" src="/assets/logo/logo-6.png" role="presentation" alt="slide6" />
    </div>,
    
  ];

  return (
    <div className="w-full my-6 px-5">
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        infinite={true}
        animationDuration={900}
        paddingLeft={6}
        paddingRight={6}
        items={items}
        responsive={responsive}
        disableDotsControls={true}
        disableButtonsControls={true}
        controlsStrategy="default"
      />
    </div>
  );
};

export default BrandSlider;
