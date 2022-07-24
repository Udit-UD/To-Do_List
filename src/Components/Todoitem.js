import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    
  return (
    <div className="border-bottom rounded mb-3">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger mb-2' onClick={()=> onDelete(todo)} >Delete</button>
    </div>
  )
}

export default Todoitem
