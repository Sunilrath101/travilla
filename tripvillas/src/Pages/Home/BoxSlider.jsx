import { Swiper, SwiperSlide } from "swiper/react";
import HomeImageBox from "../../Components/HomeImageBox/HomeImageBox";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import style from './BoxSlider.module.css'


// import required modules
import { Pagination } from "swiper";

export default function BoxSlider() {
    return (
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}
        >
          <SwiperSlide><HomeImageBox/></SwiperSlide>
          <SwiperSlide><HomeImageBox/></SwiperSlide>
          <SwiperSlide><HomeImageBox/></SwiperSlide>
          <SwiperSlide><HomeImageBox/></SwiperSlide>
          <SwiperSlide><HomeImageBox/></SwiperSlide>
          <SwiperSlide><HomeImageBox/></SwiperSlide>
        </Swiper>
      </>
    );
  }