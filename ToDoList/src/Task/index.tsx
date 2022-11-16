import './style.css'
import { GrTrash } from 'react-icons/gr';
import { GiCheckMark } from 'react-icons/gi';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useEffect, useState } from 'react';


const date = new Date()


type TTask = {
    description: string;
}



export function Task( props: TTask ){

    const [status, setStatus] = useState<string>('Pending')
    const [color, setColor] = useState<string>('rgb(79, 75, 82')
    

    useEffect (()=> {
        setColor(status == 'Completed' ? 'green' : 'gray');        
    }, [status])
    
    const completedTask = () => setStatus('Completed')
    const log = () => setStatus('pending')    
    
    const buttonComeBack = <RiArrowGoBackFill className='bt' onClick={()=> setStatus('Pending')}/>
    const buttonCheck = <GiCheckMark className='bt' onClick={()=> setStatus('Completed')}/> 
    
    const bt = () => status == 'Completed' ? buttonComeBack : buttonCheck

    return (
        <div className='task' style={{ backgroundColor: color}}>
            <div className='optionsTask'>
            <GrTrash className='bt'/>
            {bt()}        
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
