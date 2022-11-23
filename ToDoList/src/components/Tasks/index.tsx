import React from 'react'
import { Task } from '../Task'
import { AddTask } from '../AddTaks'
import './style.css'



type TTask = {
  description: string,
  createDate: string,
  deadline: string
}

type TTasks = {
  tasks: TTask[]
}


export function Tasks({ tasks }: TTasks) {

  

  return (
    <div className='tasks'> {          
      tasks.map(task => (
        <Task
          key={task.description}
          description={task.description}
          createDate={task.createDate}
          deadline={task.deadline}
        />
      ))
    }
      <AddTask />
    </div>
  )
}