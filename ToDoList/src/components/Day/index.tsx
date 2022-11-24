import React, { useEffect, useState } from 'react'
import { Tasks } from '../Tasks'
import './style.css'



type TDay = {
  day: number
}

type TTask = {
  description: string,
  createDate: string,
  deadline: string
}

type TDatas = {
  date: string,
  day: string
  tasks: TTask[]
}

type TDate = {
  date: Date,  
}

let datas:TDatas[] = [{
    date: "22/11/2022",
    day: "Segunda",
    tasks: [
      {
        description: "levantar",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      }

    ]
  },
  {
    date: "23/11/2022",
    day: "Terça",
    tasks: [
      {
        description: "Levantar",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      },
      {
        description: "andar",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      },
      {
        description: "correr",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      }

    ]
  },
  {
    date: "24/11/2022",
    day: "Quarta",
    tasks: [
      {
        description: "caminhar",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      }

    ]
  },
  {
    date : "25/11/2022",
    day: "Quinta",
    tasks: [
      {
        description: "correr",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      }

    ]
  },
  {
    date :"26/11/2022",
    day: "Sexta",
    tasks: [
      {
        description: "trabalhar",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      }

    ]
  },
  {
    date: "27/11/2022", 
    day: "Sabado",
    tasks: [
      {
        description: "descançar",
        createDate: "21/11/2022",
        deadline: "25/11/2022",
      }

    ]
  }
];


export function Day({ date }: TDate) {  

  const addTask = (date: string, task: TTask) =>{
    datas.map(data => data.date == date && data.tasks.push(task))
  }

  return (
    <div className="day">
      <h1>{date.toLocaleDateString()}</h1>
      <Tasks
          tasks={         
            datas.find(
              data => data.date == date.toLocaleDateString()
            )?.tasks as TTask[] || [""]
          }          
      />
    </div>
  )
}