import React from "react";
import { TodoContext } from "../todoContext";
import "../style/TodoForm.css"

function TodoForm(){
    const [newValue, setNewValue,] = React.useState('');
    const {onAdd, openModal ,setOpenModal} = React.useContext(TodoContext);


    function onSubmit(event){
     event.preventDefault();
       onAdd(newValue);
       setOpenModal(false);
    };

    const onAddTodo = (event) =>{
        let text = event.target.value;
        
        setNewValue(text);
        
    };

    const onCancel = ()=> {
        setOpenModal(prevState => !openModal);
        
        
    }


    return(
        <form className="formTodo" onSubmit={onSubmit}>
            <label>Añade un nuevo TODO</label>
            <textarea
             placeholder = "Cortar cebolla paa el almuerzo"
            value={newValue}
             onChange={onAddTodo}
            />
            <div className="buttonTodo">
                <button type="button"
                onClick={() => onCancel()}
                >Cancelar</button>
                <button type="submi">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm }