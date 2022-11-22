import React, { useEffect, useState } from 'react'
import { BiMoon } from 'react-icons/bi'
import { BsSun } from 'react-icons/bs'
import './style.css'



type TMode = {
  mode: Function
}

export function Mode({ mode }: TMode) {
 
  const [nigthMode, setNigthMode] = useState<boolean>(true);

  function setModeTrue() { mode(true) }      
  function setModeFalse() { mode(false) }

  return (
    
    <div className="mode">
      
        <div className='buttonMode'>
          <div className='buttonSun' onClick={setModeFalse}>
            <BsSun/>
          </div>
          <div className='buttonMoon' onClick={setModeTrue}>
            <BiMoon/>
          </div>
        </div>
        
    </div>
  )
  
}