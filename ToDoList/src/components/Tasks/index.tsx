import React from 'react'
import { Task } from '../Task'
import { AddTask } from '../AddTaks'
import './style.css'

type TTasks = {
  tarefas: string[]
}




export function Tasks({ tarefas }: TTasks) {

  return (
    <div className='tasks'> {
      tarefas.map(task => (
        <Task
          key={task}
          description={task}
        />
      ))
    }
      <AddTask />
    </div>
  )
}