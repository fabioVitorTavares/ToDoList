import React, { useState, useRef, useEffect } from 'react'
import { TSetDate } from '../Calendar'
import './style.css'

export function MinCalendar({ setDate, date }: TSetDate) {
  
  const nu = useRef<HTMLSpanElement>(null)

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
    const newNumbersOfDays = new Array<string>(42).fill('')
    const postionRestDay = (date.getDay() - (date.getDate() % 7)  +1)
    const positionDayOne = postionRestDay > 0 ? postionRestDay : postionRestDay  +7
        
    for (let i=positionDayOne; i<daysOfMonth()+positionDayOne ; i++){
      newNumbersOfDays[i] = String(i - positionDayOne + 1)      
    }
   
    setNumbersOfDays(newNumbersOfDays)
  }, [date])

  function funcao() {
    console.log()
  }
  
  const renderNumber = (n: string) => {   
    
    return  Number(n) == date.getDate() ?
      <span
        onClick={() => funcao()}
        key={Math.random()}
        className='number'
        style={{ backgroundColor: '#0421a3' }}
        ref={nu}
      >{n}</span>
      :
      <span
        onClick={() => funcao()}
        ref={nu}        
        key={Math.random()}
        className='number'
      >{n}</span>    
  }

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
        <div className='numbersOfDays'>
          {days.map(letter => <span key={Math.random()}>{letter[0]}</span>)}
          {numbersOfDays.map(n => renderNumber(n))}
        </div>
      </div>
    </div>
        
  )
}