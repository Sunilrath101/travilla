import React from "react";
import style from './HotelCardVertical.module.css'

const HotelCardVertical = () => {
  return <div className={style.container}>
    <img src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/17755154/img_8424_watermarked_image_1024.jpeg" alt="" />
    <div className={style.details}>
      <div className={style.first}>
        <div>
          <p>Ref Id:#1828282</p>
          <p>Rated 4.5/5 5 guests</p>
        </div>
        <h2>Villa On The Hill In Candolim</h2>
        <p>Candolim, Goa, India</p>
      </div>
      <div className={style.second}>
        <div>
          <p>Villa</p>
          <p>House</p>
        </div>
      </div>
      <div className={style.third}>
        <h2>₹10,101.00</h2>
        <p>per night</p>
      </div>
    </div>
  </div>;
};

export default HotelCardVertical;
