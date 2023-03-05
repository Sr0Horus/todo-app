import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';
const todos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'toma curso de React', completed: false},
  {text: 'llorar com la llorona', completed: false}
];

function App(){
  return (
  <React.Fragment>
    <TodoCounter />

    <TodoSearch />

    <TodoList> 
    {todos.map( (item, index) =>(
      <TodoItem key={index} text={item.text} />
    ))}
    </TodoList>

    <CreateTodoButton />
  </React.Fragment>
  ); 
}

export default App;
