import React from "react";
import "../style/TodoCounter.css";
import { TodoContext } from "../todoContext";

function TodoCounter() {
    const {contTodos, totalTodos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {contTodos} de {totalTodos} todos</h2>
    );

}

export { TodoCounter }