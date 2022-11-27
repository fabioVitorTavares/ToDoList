import './style.css'
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MinCalendar } from '../MinCalendar'

export type TSetDate = {
  setDate: Dispatch<SetStateAction<Date>>
  date: Date
}

export function Calendar({ setDate, date }: TSetDate) {
  

  const tomorrow = () => {
    const newDate = new Date
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)    
  }

  const yesterday = () => {
    const newDate = new Date
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)   
  }



  return (
    <div className='calendar'>
      
      <MinCalendar setDate={setDate} date={date} />
      <div className='viewDay'>
        <button onClick={yesterday}>-</button>
        <h1>{date.toLocaleDateString()}</h1>
        <button onClick={tomorrow}>+</button>
      </div>
    </div>
  )
}