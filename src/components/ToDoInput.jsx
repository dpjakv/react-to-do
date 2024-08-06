import React from 'react'
import { useState } from 'react'

export default function ToDoInput(props) {
    const {addTask, newTaskValue, setnewTaskValue} = props
    return (
        <header>
            <input name="inputArea" value={newTaskValue} onChange={(e) =>{
                setnewTaskValue(e.target.value)
            }} placeholder="Enter new Task"/>
            <button name="AddTask" onClick={()=>{
                addTask(newTaskValue)
                setnewTaskValue('')
            }}>Add</button>
        </header>
    )
}
