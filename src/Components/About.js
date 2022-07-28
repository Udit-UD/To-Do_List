import React from 'react'
import "./Abtcss.css"

const myStyle = {
    minHeight: "86vh",
}
export const About = () => {
    return (
        <div classNmae="container" id="cont" style={myStyle}>
            <div className='cont border p-2'>
                <h1 className='mb-3'>
                    Why ToDo List?
                </h1>
                <span className='xyz'>
                    <ul className="x list-group">
                        <li className="list-group-item active" aria-current="true"><b>Benefits</b></li>
                        <li className="list-group-item">1. <b> Increases productivity:</b> At work and at home, having a to-do list may help you prioritize your work and personal tasks.</li>
                        <li className="list-group-item">2. <b>  Provides motivation: </b>Having a to-do list makes it easier to organize everything that you want to accomplish in the day so that you can start fresh the next. </li>

                        <li className="list-group-item">3.<b>  Improves memory: </b>Creating and maintaining a daily to-do list can help improve your overall memory by reinforcing your short-term memory.</li>
                        <li className="list-group-item">4. <b> Allows for more personal time: </b> A to-do list can help you organize your time and finish your tasks more efficiently, giving you more free time.</li>
                        <li className="list-group-item">5. <b> Provides a sense of accomplishment: </b> Accomplishing a task can boost morale and improve productivity. Even if it's as simple as making your bed, completing a task is a powerful motivator for many people.</li>
                    </ul>
                </span>

            </div>
            <div className='border p-2'>
                <h1 className='mb-3'>
                    Purpose
                </h1>
                <p>This web application is created by Udit Gupta as a React Based Project. The sole purpose for choosing this "To-Do List Manager" is to make the life of people sorted.<br />
                    We are so busy in our daily life that it's very difficult to remember our "todo-tasks". This web app helps you to remember your all tasks daily. <br /><br /> You can follow <i>Udit</i>  on
                    <a href='https://www.instagram.com/_udit_ud_/'> Instagram </a> and
                    <a href='https://www.linkedin.com/in/udit-gupta-77906a228/'> LinkedIn</a>
                    </p>
            </div>
        </div>
    )
}
export default About;