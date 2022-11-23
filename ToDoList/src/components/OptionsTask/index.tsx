import React, { useState } from 'react'

import { MdOutlineExpandMore } from 'react-icons/md'
import './style.css'


export function OptionsTask() {

  const [open, setOpen] = useState<Boolean>(false)


  return (
    <div className='optionsTask'>
      <MdOutlineExpandMore
        onClick={() => setOpen(!open)}
        className='buttonOptionsTask'
        style={
          open && {
            animation: "rotation 1s linear normal",
            transform: "rotate(180deg)"
          } 
        }
      />
        {open && <button>Completed</button>}
        {open && <button>More infos</button>}
        {open && <button>Delete</button>}
    </div>
  )
}