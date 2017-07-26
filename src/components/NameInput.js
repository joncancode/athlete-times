 import React from 'react'
 
 import './NameInput.css';

 export default function NameInput(props) {
 
 return (<div>
        <label className="name">Enter Your Name</label>
        <input className="nameInput" placeholder="Usain Bolt"  
        onChange={e => props.onChange(e.target.value)} value={props.value} required/>
        </div>
)
 }