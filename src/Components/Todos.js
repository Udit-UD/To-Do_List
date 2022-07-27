import React from 'react'
import {Todoitem} from './Todoitem'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh"
    }
  return (
    <>
        <h2 className='mt-3 mb-4'>Todos list</h2>
    <div className="container mb-3" style={myStyle}>
        <div>
            {props.todos.length===0?<h4 className="text-justify">No tasks left for today!!</h4>:
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
            })
            }
        </div>
    </div></>
  )
}
export default Todos;
