import React, { useEffect, useState } from 'react'
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
  date: Date,
  n: number
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
        description: "Levantar",
        createDate: "",
        deadline: "",
      },
      {
        description: "andar",
        createDate: "",
        deadline: "",
      },
      {
        description: "correr",
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
    date : "25/11/2022",
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
    date :"26/11/2022",
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
    date: "27/11/2022", 
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


export function Day({ date }:TDate, n:number ) {
  const [tasks, setTasks] = useState<TTasks[]>([]);
  const day = datas.find(data => data.date == date.toLocaleDateString()) as TDatas
  /* setTasks(day.tasks)
  console.log(day); */

  
  return (
    <div className="day">
      <h1>{date.toLocaleDateString()}</h1>
      <Tasks
        tasks={tasks}
      />
    </div>
  )
}