import { Swiper, SwiperSlide } from "swiper/react";
import HomeImageBox from "../../Components/HomeImageBox/HomeImageBox";
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import style from './BoxSlider.module.css'


// import required modules
import { Pagination } from "swiper";

export default function BoxSlider({q}) {
  const [data, setData]= useState()

  const fetchData=()=>{
    axios
    .get(`https://long-plum-mite-cape.cyclic.app/${q}`)
    .then((res)=> setData(res.data))
    .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(data);

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
          
          {
            data && data.map((item)=>{
              return ( <SwiperSlide key={item.id}>
                <Link to={`/search-city/${item.location}`}><HomeImageBox 
              location={item.location}
              img={item.img}
              name={item.text}
              /></Link>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
      </>
    );
  }