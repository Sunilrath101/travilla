import React from 'react'
import Button from '../Button/Button'
import style from './HomeCard.module.css'

const HomeCard = () => {
  return (
    <div className={style.box}>
      <h2>Fully Managed Communities By Tripvillas</h2>
        <div>
          <div>
            <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg" alt="" />
            <p>High Quality housekeeping</p>
          </div>
          <div>
            <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg" alt="" />
            <p>Comfortable Linen and Toiletries</p>
          </div>
          <div>
            <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg" alt="" />
            <p>Quality Furniture & Fittings</p>
          </div>
          <div>
            <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg" alt="" />
            <p>Food Delivery Or Central Restaurant</p>
          </div>
        </div>
        <Button text="EXPLORE INVESTMENT OPPORTUNITIES"/>
    </div>
  )
}

export default HomeCard
