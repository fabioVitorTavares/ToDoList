import React from 'react'
import { SlOptions } from 'react-icons/sl'
import './style.css'


export function OptionsTask() {
  return (
    <details className='optionsTask' open={false}>
      <summary>
        <SlOptions/>
      </summary>
        <button>Completed</button>
        <button>More infos</button>
        <button>Delete</button>
    </details>
  )
}