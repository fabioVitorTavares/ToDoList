import { Day } from '../Day'
import { Calendar } from '../Calendar'
import { useEffect, useState } from 'react'
import './style.css'
import React from 'react';



export function Body() {

  const [currentDate, setCurrentDate] = useState<Date>(new Date)

  

  return (
    <div className="body">
      <Calendar setDate={setCurrentDate} date={currentDate} />      
      <Day date={currentDate}/>
    </div>
  )
}