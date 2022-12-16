import React from "react";
import style from './HomeImageBox.module.css'
import styled from "styled-components";


const HomeImageBox = ({location, img, name}) => {
  return <Container img={img}>
    <div className={style.box}>
      <h2>{location}</h2>
      <p>{name}</p>
    </div>
  </Container>;
};

export default HomeImageBox;

const Container= styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;  
`
