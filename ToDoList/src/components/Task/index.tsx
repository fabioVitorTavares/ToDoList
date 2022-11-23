import './style.css'
import { GrTrash } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useEffect, useState } from 'react';
import { OptionsTask } from '../OptionsTask';
import React from 'react';


const date = new Date()


type TTask = {
  description: string,
  createDate: string,
  deadline: string
}



export function Task({ description, createDate, deadline }:TTask) {

  const [status, setStatus] = useState<string>('Pending')
  const [color, setColor] = useState<string>('rgb(79, 75, 82')


  useEffect(() => {
    setColor(status == 'Completed' ? 'green' : '');
  }, [status])

  const completedTask = () => setStatus('Completed')
  const log = () => setStatus('pending')

  const buttonComeBack = <RiArrowGoBackFill className='bt' onClick={() => setStatus('Pending')} />
  const buttonCheck = <GiCheckMark className='bt' onClick={() => setStatus('Completed')} />

  const bt = () => status == 'Completed' ? buttonComeBack : buttonCheck

  return (
    <div className='task' style={{ backgroundColor: color }}>
      <div className='divOptionsTask'>
        <OptionsTask />
      </div>
      <div className='contentTask'>
        <p className='description'>{description}</p>
      </div>
      <div className='datesTask'>
        <p>C {createDate}</p>
        <p>D {deadline}</p>
      </div>
    </div>
  )
}
