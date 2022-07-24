import './App.css';
import Header from './Components/Header';
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import React, { useState } from 'react'
import { Addtodo } from "./Components/Addtodo";

function App() {
  const onDelete = (todo)=>{
    console.log(todo.title," Deleted!!")

    setTodolist(todolist.filter((e)=>{
      return e!==todo;
    }))
  }
  
  const addTodo = (title,desc) =>{
    console.log("I am adding!");
    let sno;
    if (todolist.length===0){
      sno =0 ;
    }
    else{
      sno = todolist[todolist.length-1].sno + 1;
    }

    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodolist([...todolist,myTodo]);
  }

  const [todolist, setTodolist] = useState([
    {
      sno: 1,
      title: "Go to mall",
      desc: "You need to go to mall for some shopping"
    },
    {
      sno: 2,
      title: "Go to saloon",
      desc: "You need to go to saloon for some Grooming"
    },
    {
      sno: 3,
      title: "Go to Temple",
      desc: "You need to go to Temple as it is Saavan's Somvaar Today"
    }
  ])
  return (
    <div className="App">
      <Header/>
      <Addtodo addTodo={addTodo} />
      <Todos todos={todolist} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
