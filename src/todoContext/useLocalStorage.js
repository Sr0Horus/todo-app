import React from "react";

function useLocalStorage(itemName, valiu){

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
     //Mostrar todos
     const [todos, setTodos] = React.useState(valiu);
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
        const todoLocalStorage = JSON.parse(localStorage.getItem(itemName));
  
        let newTodos;
      
         if(!todoLocalStorage){
      
          newTodos = []
          localStorage.setItem(itemName,JSON.stringify(valiu));
      
         }else{
          
          newTodos = todoLocalStorage
      
         };      
          setTodos(newTodos);
        }catch(error){
          setError(error);
        }finally{
          setLoading(false);
        }
      }, 2000);
    
  
    },[]);
  
     // manejo de todos delete and todos completed
    const updateLocalStorange = (updateTodo) => {
      try{
      localStorage.setItem(itemName,JSON.stringify(updateTodo));
      setTodos(updateTodo);
    }catch(error){
      setError(error);
    }
  }
  
    return[
      todos,
      updateLocalStorange,
      loading,
      error,
  
    ];
  
  }

  export { useLocalStorage }