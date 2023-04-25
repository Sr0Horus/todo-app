import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContext } from "../todoContext";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/createTodoButton/CreateTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../modal";


function UI() {
  const { muestra, loading, error, onComplete, onDelet, openModal} = React.useContext(TodoContext);
  console.log("UI", openModal)
    return (
        <React.Fragment>
           <TodoCounter />
      
      <TodoSearch />        
             <TodoList loading = {loading} error={error}>  
               {muestra.map( (item, index) =>(
                 <TodoItem key={index} text={item.text} completed={item.completed} onComplete={() => onComplete(item.text, index)} onDelet= {() => onDelet(item.text, index)} />
                 
               ))}
             </TodoList>
             {!!openModal && (
               <Modal>
                <TodoForm/>
              </Modal>
             )}
            
         <CreateTodoButton oepnModal= {openModal}/>
        </React.Fragment>

        ); 
}

export { UI }