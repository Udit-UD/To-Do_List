import React, { useState } from 'react'

export const Addtodo = (addTodo) => {
    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if (!title | !desc) {
            alert("Title or Description can't be blank");
        }
        addTodo(title,desc);
    }
    return (
        <div className="container">
            <h3 className="mt-3">Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Task</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" placeholder="Enter your todo task" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="desc" placeholder="Enter some description of your task" />
                </div>
                <button type="submit" className="btn my-3 btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default Addtodo;
