import React, { HTMLInputTypeAttribute } from 'react'
import { useState, useRef } from 'react'
import './style.css'


export function AddTask() {

  const [addingTask, setAddingTask] = useState<boolean>(false)

  function onAddTask() { setAddingTask(true)}
  function closeAdd() { setAddingTask(false) }
  
  const descriptionNewTask = useRef<HTMLInputElement>(null);
  const deadlineNewTask = useRef<HTMLInputElement>(null);
  function addNewTask() {

  }

  return (
    <>
      <details className='addingNewTask' open={addingTask}> 
          <summary>                    
              {!addingTask && <button onClick={onAddTask}>New task</button> }                    
          </summary>              
          <form className='formAddNewTask' onSubmit={(e)=> e.preventDefault()}>                
              <div className='inputsFormAddNewTask'>
            <input className='inputNewTask' type="text" name="newTask" placeholder='New task' ref={descriptionNewTask} />
                  <input className='inputDeadline' type="datetime-local" name="deadline" ref={deadlineNewTask}/>
              </div>
              <div className='buttonsFormAddNewTask'>
                  <button className='buttonCancel' onClick={closeAdd}>Cancel</button>
                  <button className='buttonAdd' onClick={addNewTask}>Add</button>
              </div>
          </form> 
      </details>
    </>
  )
}