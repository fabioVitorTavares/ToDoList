import './style.css'

const date = new Date()
console.log(date.toLocaleString());
export function Task({description, status, dateTime, dateTimeLimit}){
    return (
        <div className='task'>
            <p className='description'>{description}</p>
            <p>{date.toLocaleString()}</p>
        </div>
    )
}
