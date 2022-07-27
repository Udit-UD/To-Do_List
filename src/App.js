import './App.css';
import Header from './Components/Header';
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import React, { useState, useEffect } from 'react'
import { Addtodo } from "./Components/Addtodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log(todo.title, " Deleted!!")

    setTodolist(todolist.filter((e) => {
      return e !== todo;
    }))
    console.log("Deleted!!!", todo);
    localStorage.setItem("todos", JSON.stringify(todolist));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding!");
    let sno;
    if (todolist.length === 0) {
      sno = 0;
    }
    else {
      sno = todolist[todolist.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodolist([...todolist, myTodo]);
  }

  const [todolist, setTodolist] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist])


  return (
    <div className="App">
      <Header />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todolist} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
