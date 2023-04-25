import React from "react";
import { TodoContext } from "../../todoContext";
import "../../style/CreateTodoButton.css"

function CreateTodoButton() {
const  {openModal, setOpenModal} = React.useContext(TodoContext);

const alertClick = ()=> {
    setOpenModal(prevState => !openModal);
    
    
}
    return(
        <button className="CreateTodoButton" onClick={() => alertClick()}>
            +

        </button>
    );

}

export { CreateTodoButton }