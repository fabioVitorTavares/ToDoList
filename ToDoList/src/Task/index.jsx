import './style.css'
import { GrTrash } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';

const date = new Date()
console.log(date.toLocaleString());
export function Task({description, status, dateTime, dateTimeLimit}){
    return (
        <div className='task'>
            <div className='optionsTask'>
                <GrTrash/>
                <GiCheckMark/>
            </div>
            <div className='contentTask'>
                <p className='description'>{description}</p>
            </div>  
            <div className='datesTask'>
                <p>Created {date.toLocaleString()}</p>
                <p>Deadline {date.toLocaleString()}</p>
            </div>        
        </div>
    )
}
