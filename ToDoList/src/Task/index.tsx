import './style.css'
import { GrTrash } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
import React from 'react';

const date = new Date()
console.log(date.toLocaleString());

type TTask = {
    description: string;
}
export function Task( props: TTask ){
    return (
        <div className='task'>
            <div className='optionsTask'>
                <GrTrash/>
                <GiCheckMark/>
            </div>
            <div className='contentTask'>
                <p className='description'>{props.description}</p>
            </div>  
            <div className='datesTask'>
                <p>Created {date.toLocaleString()}</p>
                <p>Deadline {date.toLocaleString()}</p>
            </div>        
        </div>
    )
}
