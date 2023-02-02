import React from 'react';
import {ValueType} from "../App";


type TasksPropsType = {
    value: ValueType;
}


export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h1>{props.value.title}</h1>
            <ul>
                {props.value.tasks.map((el )=> {
                    return (
                        <li key={el.taskId}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.value.students.map((el )=> {
                    return (

                        <li key={el[0]}>{el}</li>
                    )
                })}
            </ul>
        </div>
    )
}






