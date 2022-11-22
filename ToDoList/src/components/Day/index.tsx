import React, { useState } from 'react'
import { Tasks } from '../Tasks'
import './style.css'



type TDay = {
  day: number
}

type TTasks = {
  description: string,
  createDate: string,
  deadline: string
}

type TDatas = {
  date: string,
  day: string
  tasks: TTasks[]
}


const datas:TDatas[] = [{
    date: "15/11/2022",
    day: "Segunda",
    tasks: [
      {
        description: "levantar",
        createDate: "",
        deadline: "",
      }

    ]
  },
  {
    date: "16/11/2022",
    day: "Terça",
    tasks: [
      {
        description: "andar",
        createDate: "",
        deadline: "",
      }

    ]
  },
  {
    date: "17/11/2022",
    day: "Quarta",
    tasks: [
      {
        description: "caminhar",
        createDate: "",
        deadline: "",
      }

    ]
  },
  {
    date : "18/11/2022",
    day: "Quinta",
    tasks: [
      {
        description: "correr",
        createDate: "",
        deadline: "",
      }

    ]
  },
  {
    date :"19/11/2022",
    day: "Sexta",
    tasks: [
      {
        description: "trabalhar",
        createDate: "",
        deadline: "",
      }

    ]
  },
  {
    date: "20/11/2022", 
    day: "Sabado",
    tasks: [
      {
        description: "descançar",
        createDate: "",
        deadline: "",
      }

    ]
  }
];


export function Day(props: TDay) {

  const [tasks, setTasks] = useState<TDatas[]>(datas);

  return (
    <div className="day">
      <h1>{tasks[props.day].day}</h1>
      <Tasks
        tasks={tasks[props.day].tasks}
      />
    </div>
  )
}