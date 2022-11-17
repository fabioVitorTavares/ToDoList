import React from 'react'
import { useState } from 'react'
import { Task } from '../Task'
import './style.css'

type TTasks = {
    tarefas: string[]
}




export function Tasks(props: TTasks){
    
    const [addingTask, setAddingTask] = useState<boolean>(false)

    function addTask() { setAddingTask(true)}
    function closeAdd() {setAddingTask(false)}
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
                        
            <details className='addingNewTask' open={addingTask}> 
                <summary>                    
                    {!addingTask && <button onClick={addTask}>New task</button> }                    
                </summary>              
                <form className='formAddNewTask' onSubmit={(e)=> e.preventDefault()}>                
                    <div className='inputsFormAddNewTask'>
                        <input className='inputNewTask' type="text"  name="newTask" placeholder='New task'/>
                        <input className='inputDeadline' type="datetime-local" name="deadline"/>
                    </div>
                    <div className='buttonsFormAddNewTask'>
                        <button className='buttonCancel' onClick={closeAdd}>Cancel</button>
                        <button className='buttonAdd'>Add</button>
                    </div>
                </form> 
            </details>        
        </div>
    )
}