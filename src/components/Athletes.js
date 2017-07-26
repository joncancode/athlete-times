import React from 'react'

import './Athletes.css';


export default function Athletes(props) {

return <div className="Athletes">
    
    <p className="athleteName">{props.name}</p>
    <p className="athleteTime">{props.time}</p>

    </div>

}