import React from "react";
import  { TodoProvider } from "../todoContext";
import { UI } from "./UI";
// import './App.css';






function App() {

  

 return(

  <TodoProvider>
    <UI/>
  </TodoProvider>
 );


}

export default App;
