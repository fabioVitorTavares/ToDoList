import './style.css'
import 'react-day-picker/dist/style.css';
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DayPicker } from 'react-day-picker';

type TSetDate = {
  setDate: Dispatch<SetStateAction<Date>>
  date: Date
}

export function Calendar({ setDate, date }: TSetDate) {
  
  const [selected, setSelected] = useState<Date>(new Date);

  const tomorrow = () => {
    const newDate = new Date
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)    
    setSelected(newDate)
  }

  const yesterday = () => {
    const newDate = new Date
    newDate.setFullYear(date.getFullYear())
    newDate.setMonth(date.getMonth())
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)   
    setSelected(newDate)
  }

  useEffect(() => {
    setDate(selected)    
  }, [selected])

  return (
    <div className='calendar'>
      <DayPicker
        className='dateSelector'
        mode="single"
        selected={selected}
        onSelect={()=>setSelected}        
      />
      <div className='viewDay'>
        <button onClick={yesterday}>-</button>
        <h1>{date.toLocaleDateString()}</h1>
        <button onClick={tomorrow}>+</button>
      </div>
    </div>
  )
}