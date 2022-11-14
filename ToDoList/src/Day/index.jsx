import { Tasks } from '../Tasks'
import './style.css'

export function Day({ day }){
    return (
        <div className="day">
            <h1>{ day }</h1>
            <Tasks/>
        </div>
    )
}