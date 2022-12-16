import React, { useState } from 'react'
import Calendar from 'react-calendar'
import styles from '../Calendar/Calendars.css'

const Calendars = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setDate} value={date}/>
    </div>
  )
}

export default Calendars
