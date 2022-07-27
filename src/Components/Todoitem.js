import React from 'react'
import './mystyle.css'

export const Todoitem = ({ todo, onDelete }) => {

  return (
    <div className="border-bottom rounded mb-3">
        <div className="hell">
        <div className='hell2'>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
        </div>
        <div>
          <button className='btn btn-sm btn-danger mb-2' onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todoitem
