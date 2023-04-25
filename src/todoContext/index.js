import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();


function TodoProvider (props) {

    const [todos, setTodos, loading, error] = useLocalStorage('todos_v1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

//conteo de todos
  const contTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

//filter todos and mostrar
  let muestra = [];

  if (!searchValue.length >= 1){
    muestra = todos;

  }else{
    muestra = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);

    });

  }


  //estados para delet, completd and add

  const onAdd = (texto,) => {
  
    // const index = todos.findIndex(todo => todo.text === text);

    const todoText = [...todos];

    todoText.push({ text: texto, completed: false});
    
    setTodos(todoText);
  }

  const onComplete = (text, index) => {
  
    // const index = todos.findIndex(todo => todo.text === text);

    const todoText = [...todos];

    if (todoText[index].completed === true){

      todoText[index].completed = false;
    }else{

      todoText[index].completed = true;

    }
    
    setTodos(todoText);
  }

  const onDelet = (text, key) => {
  
    // const index = todos.findIndex(todo => todo.text === text);

    const todoText = [...todos];
    
    console.log(key)
    // if(index === key){
    todoText.splice(key, 1);
  //  }

    setTodos(todoText);
  }

  return(
    <TodoContext.Provider value={{
        contTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        onComplete,
        onDelet,
        muestra,
        loading,
        error,
        openModal,
        setOpenModal,
        onAdd,
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };  