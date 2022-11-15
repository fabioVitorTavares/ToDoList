import { Task } from '../Task'
import './style.css'

export function Tasks({ tarefas }){
    return (
        <div className='tasks'>
            {
                tarefas.map(task => (
                    <Task 
                        key={task}
                        description={task} 
                    />
                ))
            }               
            <button>+</button>          
        </div>
    )
}