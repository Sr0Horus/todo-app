import React from "react";
import "../style/TodoItem.css"

function TodoItem(props) {
console.log("hola")
    return(
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick = {props.onComplete}
            >C</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete" onClick={props.onDelet}>X</span>
        </li>
    );

}

export { TodoItem }