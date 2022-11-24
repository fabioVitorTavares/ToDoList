import React, { Dispatch, SetStateAction, useState } from 'react'

import { MdOutlineExpandMore } from 'react-icons/md'
import './style.css'

type TSetStatusTask = {
  setStatusTask: Dispatch<SetStateAction<string>>
}

export function OptionsTask({ setStatusTask }: TSetStatusTask ) {

  const [open, setOpen] = useState<Boolean>(false)

  const completedTask = () => {
      
  }

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
        {open && <button onClick={() => setStatusTask("Completed")}>Completed</button>}
        {open && <button>More infos</button>}
        {open && <button>Delete</button>}
    </div>
  )
}