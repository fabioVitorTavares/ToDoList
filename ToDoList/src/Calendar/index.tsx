import { Day } from '../Day'
import { useState } from 'react'
import './style.css'
import React from 'react';

const days: string[] = [
    "14/11/2022 Segunda",
    "15/11/2022 Terça",
    "16/11/2022 Quarta",
    "17/11/2022 Quinta",
    "18/11/2022 Sexta",
    "19/11/2022 Sabado",
    "20/11/2022 Domingo",    
]


export function Calendar(){
    const [daySelect, setDaySelect] = useState<number>(1);
    
    return (
        <div className="calendar">
            <button onClick={()=> setDaySelect(daySelect -1)}>-</button>
            <button onClick={()=> setDaySelect(daySelect +1)}>+</button>
            <Day day={daySelect}/>
        </div>
    )
}