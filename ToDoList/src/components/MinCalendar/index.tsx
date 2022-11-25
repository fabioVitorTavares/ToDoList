import React, { useState } from 'react'
import { TSetDate } from '../Calendar'
import './style.css'

export function MinCalendar({ setDate, date }: TSetDate) {
  
  const a = ['','','','1','2','3','4','5','6','7','8','9','10','11','12', '13','14','15', '16', '17', '18', '19','20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '', '', '', '', '6', '', '', '', '', '', '']
  const hoje = new Date("02-10-2017")

  const [datte, setDatte] = useState<Date>(hoje)
  const [numbersOfDays, setNumbersOfDays] = useState<string[]>(a)
  console.log(datte);

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

  return (
    <div>
      <div className='minCalendar'>
        <header className='monthYearDay'>
          <div className='monthYear'>
            <p>{months[datte.getMonth()][0]} 2022</p>
            <button>-</button>
            <button>+</button>
          </div>
          
        </header>
        <div className='numbersOfDays'>
          <table>
            <thead>
              <tr>
                <td>S</td>
                <td>M</td>
                <td>T</td>
                <td>W</td>
                <td>T</td>
                <td>F</td>
                <td>S</td>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>{numbersOfDays[0]}</td>
                <td>{numbersOfDays[1]}</td>
                <td>{numbersOfDays[2]}</td>
                <td>{numbersOfDays[3]}</td>
                <td>{numbersOfDays[4]}</td>
                <td>{numbersOfDays[5]}</td>
                <td>{numbersOfDays[6]}</td>
              </tr>
              <tr>
                <td>{numbersOfDays[7]}</td>
                <td>{numbersOfDays[8]}</td>
                <td>{numbersOfDays[9]}</td>
                <td>{numbersOfDays[10]}</td>
                <td>{numbersOfDays[11]}</td>
                <td>{numbersOfDays[12]}</td>
                <td>{numbersOfDays[13]}</td>
              </tr>
              <tr>
                <td>{numbersOfDays[14]}</td>
                <td>{numbersOfDays[15]}</td>
                <td>{numbersOfDays[16]}</td>
                <td>{numbersOfDays[17]}</td>
                <td>{numbersOfDays[18]}</td>
                <td>{numbersOfDays[19]}</td>
                <td>{numbersOfDays[20]}</td>
              </tr>
              <tr>
                <td>{numbersOfDays[21]}</td>
                <td>{numbersOfDays[22]}</td>
                <td>{numbersOfDays[23]}</td>
                <td>{numbersOfDays[24]}</td>
                <td>{numbersOfDays[25]}</td>
                <td>{numbersOfDays[26]}</td>
                <td>{numbersOfDays[27]}</td>
              </tr>
              <tr>
                <td>{numbersOfDays[28]}</td>
                <td>{numbersOfDays[29]}</td>
                <td>{numbersOfDays[30]}</td>
                <td>{numbersOfDays[31]}</td>
                <td>{numbersOfDays[32]}</td>
                <td>{numbersOfDays[33]}</td>
                <td>{numbersOfDays[34]}</td>
              </tr>
              <tr>
                <td>{numbersOfDays[35]}</td>
                <td>{numbersOfDays[36]}</td>
                <td>{numbersOfDays[37]}</td>
                <td>{numbersOfDays[38]}</td>
                <td>{numbersOfDays[39]}</td>
                <td>{numbersOfDays[40]}</td>
                <td>{numbersOfDays[41]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        
  )
}