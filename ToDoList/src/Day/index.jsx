import { Tasks } from '../Tasks'
import './style.css'

const tasksOfDays = {
    
    "14/11/2022 Segunda": ["Tomar café", "Estudar Javascript"],
    "15/11/2022 Terça": ["Academia", "Almoçar"],
    "16/11/2022 Quarta": ["Correr","Aula as 19:00"],
    "17/11/2022 Quinta": ["Entrevista","Correr"],
    "18/11/2022 Sexta": ["Leitura","Ingles"],
    "19/11/2022 Sabado": ["Mercado","Correr","Comer lanche"],
    "20/11/2022 Domingo": ["Treino matinal", "Almoçar"]
    
}


export function Day({ day }){

        
    return (
        <div className="day">
            <h1>{ day }</h1>
            <Tasks tarefas={tasksOfDays[day]}/>
        </div>
    )
}