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


    const addTodo =(todo)=>{
      if (todo.name){
        setTodos([...todos,todo])
      }
    }
    
    const deleteTodo = (id) =>{
      let newTodos =todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }

    const doneTodo = (id)=>{
      let newTodos =todos.map(todo => {
        if(todo.id === id){
          todo.status = !todo.status;
        }
        return todo;
      })
      setTodos(newTodos);

    }

  return (
   <div className="app">
    <h1>Todo App</h1>
    <TodoField addTodo={addTodo}/>
    <Todos  doneTodo ={doneTodo} deleteTodo={deleteTodo} todos ={todos}/>

   </div>
  );
}

export default App;
