import React from 'react'
import Button from '../Button/Button'
import style from './Searchbar.module.css'

const Searchbar = () => {
  return (
    <form action="">
      <input type="text" />
      <select name="guest" id="">
        <option selected value="">Select Guests</option>
        <option value="">1 guest</option>
        <option value="">2 guests</option>
        <option value="">3 guests</option>
        <option value="">4 guests</option>
        <option value="">5 guests</option>
      </select>
      <Button text="SEARCH" />
    </form>
  )
}

export default Searchbar
