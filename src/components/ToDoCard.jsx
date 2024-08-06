import React from 'react'

export default function ToDoCard(props) {
    const {children, editTask, deleteTask, moveTask, index} = props;
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    moveTask(index, true)
                }}>
                <i class="fa-solid fa-arrow-up"></i>
                </button>
                <button onClick={() => {
                    moveTask(index, false)
                }}>
                <i class="fa-solid fa-arrow-down"></i>
                </button>
                <button onClick={() => {
                    editTask(index)
                }}>
                    <i className="fa-solid fa-user-pen"></i>
                </button>
                <button onClick={() => {
                    deleteTask(index)
                }}>
                <i className="fa-solid fa-trash-can"></i>
                </button>                
            </div>
        </li>
    )
}
