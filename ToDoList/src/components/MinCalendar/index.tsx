import React, { useState, useRef, useEffect } from 'react'
import { TSetDate } from '../Calendar'
import './style.css'

export function MinCalendar({ setDate, date }: TSetDate) {
    
  const [numbersOfDays, setNumbersOfDays] = useState<string[]>([])

  const months = [
  ["January", "Janeiro"],
  ["February", "Fevereiro"],
  ["March", "Março"],
  ["April", "Abril"],
  ["May", "Maio"],
  ["June", "Junho"],
  ["July", "Julho"],
  ["August", "Agosto"],
  ["September", "Setembro"],
  ["October", "Outubro"],
  ["November", "Novembro"],
  ["December", "Dezembro"]]

  const days = [
    ["S", "D"],
    ["M", "S"],
    ["T", "T"],
    ["W", "Q"],
    ["T", "Q"],
    ["F", "S"],
    ["S", "S"]    
  ]

  const daysOfMonth = () => {
      return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
  }
  useEffect(() => { 
    const newNumbersOfDays = new Array<string>(42)
    newNumbersOfDays.fill('')
    const positionDayOne = date.getDay() - (date.getDate() - (Math.floor(date.getDate() / 7) * 7)) +1  
    
    for (let i=positionDayOne; i<daysOfMonth()+positionDayOne ; i++){
      newNumbersOfDays[i] = String(i - positionDayOne + 1)
      console.log(i);
    }
   
    setNumbersOfDays(newNumbersOfDays)

  },[date])

  return (
    <div>
      <div className='minCalendar'>
        <header className='monthYearDay'>
          <div className='monthYear'>
            <p>{months[date.getMonth()][0]} 2022</p>
            <button>-</button>
            <button>+</button>
          </div>
          
        </header>
        <div className='numbersOfDays'>{
            days.map(letter => <span key={Math.random()}>{letter[0]}</span>)
          }{
            numbersOfDays.map(n => <span key={Math.random()} className='number'>{n}</span>)
          }
        </div>
      </div>
    </div>
        
  )
}