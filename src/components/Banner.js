import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import React from "react";
import banner0 from "../assets/images/banner0.jpg";
import banner1 from "../assets/images/banner4.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false} // Tắt trạng thái của mục thành tổng
        showIndicators={false} // Tắt các chỉ báo để chọn các mục
        showThumbs={false} // Tắt
        interval={4000} // set time chạy banner
      >
        <div>
          <img loading="lazy" src={banner0} alt="Banner" />
        </div>
        <div>
          <img loading="lazy" src={banner1} alt="Banner" />
        </div>
        <div>
          <img loading="lazy" src={banner2} alt="Banner" />
        </div>
        <div>
          <img loading="lazy" src={banner3} alt="Banner" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
