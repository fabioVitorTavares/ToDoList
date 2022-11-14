import { Task } from '../Task'
import './style.css'

export function Tasks(){
    return (
        <div className='tasks'>
            <Task description="Tomar café"/>      
            <Task description="Estudar styleds components"/>      
            <Task description="Codar/praticar"/>      
            <Task description="Almoçar"/>      
            <Task description="Estudar Java"/>      
            <Task description="Academia"/>             
        </div>
    )
}