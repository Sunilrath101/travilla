import React, { useState } from 'react'
import Button from '../Button/Button'
import style from './Searchbar.module.css'
import Calendar from '../Calendar/Calendars'

const Searchbar = () => {

  const [cal, setCal] = useState(false)


   return <div className={style.container}>
      <form action="">
        <div>
          <input type="text" placeholder='Location'/>
          <input type="text" placeholder='Check In' onClick={()=>setCal(!cal)}/>
          <input type="text" placeholder='Check Out' />
          <select name="guest" id="">
            <option selected value="select-guests">Select Guests</option>
            <option value="1-guest">1 guest</option>
            <option value="2-guests">2 guests</option>
            <option value="3-guests">3 guests</option>
            <option value="4-guests">4 guests</option>
            <option value="5-guests">5 guests</option>
          </select>
          <Button text="SEARCH"/>
        </div>
        {cal ? <Calendar/> : false}
      </form>
    </div>

}

export default Searchbar
