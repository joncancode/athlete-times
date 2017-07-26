import React from 'react';

import './TimeInput.css';

export default function Form(props) {

return (
    <div>
    <label className="time">Enter Your Time</label>
    <input className="timeInput" type="number" placeholder="9.58"  
    onChange={e => props.onChange(e.target.value)} value={props.value} required/>


</div>
)
}