import React from 'react'

import './ListBox.css';
import ListButtons from './ListButtons.js'
import Athletes from './Athletes.js'

export default function ListBox(props) {

return <div className="ListBoxDiv">
    
    <ListButtons/>
    <Athletes/>

    </div>

}