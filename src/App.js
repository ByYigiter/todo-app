import React, { useState } from "react";
import "./App.css"
import TodoField from "./components/TodoField";
import Todos from "./components/Todos";





function App() {

  const [todos, setTodos] =useState([
      {
        id:1,
        name :"Alisveris",
        status: false
      },

      {
        id:2,
        name :"GYM",
        status: true
      },
    ]);
  return (
   <div className="app">
    <h1>Todo App</h1>
    <TodoField/>
    <Todos todos ={todos}/>

   </div>
  );
}

export default App;
