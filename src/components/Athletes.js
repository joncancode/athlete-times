import React from 'react'

import './Athletes.css';


export default function Athletes(props) {

return <ul className="Athletes">
            <li className="athleteName">{props.name}</li>
            <li className="athleteTime">{props.time} seconds</li>
        </ul>

}