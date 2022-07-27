import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    const mystyle = {
      textalignment: "left"
    }
  return (
    <div className="border-bottom rounded mb-3" style={mystyle}>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger mb-2' onClick={()=> {onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todoitem
