import React from 'react'
import Button from '../Button/Button'
import style from './HomeCard.module.css'
import {Link} from "react-router-dom"


const HomeCard = ({heading, img1, img2, img3, img4, p1, p2, p3, p4, text, link}) => {
  return (
    <div className={style.box}>
    
      <h2>{heading}</h2>
        <div>
          <div>
            <img src={img1} alt="" />
            <p>{p1}</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p>{p2}</p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p>{p3}</p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>{p4}</p>
          </div>
        </div>
        <Link to={link}><Button text={text}/></Link>
    </div>
  );
};

export default HomeCard;
