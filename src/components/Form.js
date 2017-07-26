import React from 'react'

import './Form.css';

export default function Form(props) {

return <form className="Form">
    
    <label className="name">Enter Your Name</label>
    <input className="nameInput" placeholder="Usain Bolt">{props.text}</input>
    
    <label className="time">Enter Your Time</label>
    <input className="timeInput" type="number" placeholder="9.58">{props.time}</input>
    <label className="seconds">seconds</label>

    <br/>
    <button className="add">Add</button>

    </form>

}