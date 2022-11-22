import { Day } from '../Day'
import { useEffect, useState } from 'react'
import './style.css'
import React from 'react';



export function Calendar() {

  const [date, setNewDate] = useState<Date>(new Date)
  const [n, setn] = useState<number>(1)

  const tomorrow = () => {
    const newDate = date
    newDate.setDate(date.getDate() +1)
    setNewDate(newDate)
    setn(n+1)
  }

  const yesterday = () => {
    const newDate = date
    newDate.setDate(date.getDate() -1)
    setNewDate(newDate)
    setn(n-1)
  }


  

  return (
    <div className="calendar">
      <button onClick={tomorrow}>+</button>
      <button onClick={yesterday}>-</button>
      <Day date={date} n={n} />
    </div>
  )
}