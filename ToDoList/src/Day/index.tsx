import { Tasks } from '../Tasks'
import './style.css'



type TTaskOfDays = {
    day: string,
    tasks: string[]
}

const tasksOfDays:TTaskOfDays[] = [    
    {
        day :"14/11/2022 Segunda",
        tasks: ["Tomar café", "Estudar Javascript"]
    },
    {
        day :"15/11/2022 Terça",
        tasks: ["Academia", "Almoçar"]
    },
    {
        day :"16/11/2022 Quarta",
        tasks:["Correr","Aula as 19:00"]
    },
    {
        day :"17/11/2022 Quinta",
        tasks:["Entrevista","Correr"]
    },
    {
        day :"18/11/2022 Sexta",
        tasks: ["Leitura","Ingles"]
    },
    {
        day :"19/11/2022 Sabado",
        tasks:["Mercado","Correr","Comer lanche"]
    },
    {
        day :"20/11/2022 Domingo",
        tasks: ["Treino matinal", "Almoçar"]    
    }
]

type TDay = {
    day: number
}

export function Day(props: TDay){
        
    return (
        <div className="day">
            <h1>{tasksOfDays[props.day].day}</h1>
            <Tasks tarefas={tasksOfDays[props.day].tasks}/>
        </div>
    )
}