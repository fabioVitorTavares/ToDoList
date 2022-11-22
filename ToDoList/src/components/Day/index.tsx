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

type TDate = {
  date: string,
}

const datas:TDatas[] = [{
    date: "22/11/2022",
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
    date: "23/11/2022",
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
    date: "24/11/2022",
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


export function Day( date: TDate) {
  console.log(date.date);

  const day = datas.find(day => date === date)
  const [tasks, setTasks] = useState<TTasks[]>(day.tasks);
  return (
    <div className="day">
      <h1>{date.date}</h1>
      <Tasks
        tasks={tasks}
      />
    </div>
  )
}