import React from "react";
import ReactDOM from "react-dom";
import "../style/StyleCreateTodo.css"

function Modal({ children }){

    return ReactDOM.createPortal(
        <div className = "createTodo">
        {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }