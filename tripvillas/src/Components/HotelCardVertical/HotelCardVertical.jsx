import React from "react";
import style from './HotelCardVertical.module.css'

const HotelCardVertical = ({name, price, id, image, city, state, country, tags}) => {
  return <div className={style.container}>
    <img src={image} alt="" />
    <div className={style.details}>
      <div className={style.first}>
        <div>
          <p>Ref Id:# {id}</p>
          <p>Rated {(Math.random()+4).toFixed(1)}/5 5 guests</p>
        </div>
        <h2>{name}</h2>
        <p>{city}, {state}, {country}</p>
      </div>
      <div className={style.second}>
        <div>
          {
            tags && tags?.map((item)=>{
              return <p>
                {item}
              </p>
            })
          }
        </div>
      </div>
      <div className={style.third}>
        <h2>₹{price}</h2>
        <p>per night</p>
      </div>
    </div>
  </div>;
};

export default HotelCardVertical;
