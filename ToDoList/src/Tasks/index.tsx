import { Task } from '../Task'
import './style.css'

type TTasks = {
    tarefas: string[]
}

export function Tasks(props: TTasks){
    return (
        <div className='tasks'>
            {
                props.tarefas.map(task => (
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