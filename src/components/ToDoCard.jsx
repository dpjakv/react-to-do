import React from 'react'

export default function ToDoCard(props) {
    const {children, editTask, deleteTask, index} = props;
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
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
