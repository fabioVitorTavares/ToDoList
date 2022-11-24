import { Day } from '../Day'
import { useEffect, useState } from 'react'
import './style.css'
import React from 'react';



export function Calendar() {

  const [date, setNewDate] = useState<Date>(new Date)

  const tomorrow = () => {
    const newDate = new Date
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate() + 1)
    setNewDate(newDate)    
  }

  const yesterday = () => {
    const newDate = new Date
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate() - 1)
    setNewDate(newDate)    
  }

  return (
    <div className="calendar">
      <button onClick={tomorrow}>+</button>
      <button onClick={yesterday}>-</button>
      <Day date={date}/>
    </div>
  )
}