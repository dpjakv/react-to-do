import React from 'react'
import { useState, useEffect } from 'react'
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

    const [todos, setTodo] = useState([])
    
    const [newTaskValue, setnewTaskValue] = useState('')

    useEffect(() => {
      if(!localStorage) {
        return;
      }
      let localTodos = localStorage.getItem('todos');
      if(!localTodos){
        return;
      }
      localTodos = JSON.parse(localTodos).todos;
      setTodo(localTodos);
    }, []);

    function persistList(newList) {
      localStorage.setItem('todos', JSON.stringify({todos: newList}));
    }

    function handleAddToDo(newTaskValue){
      const newList = [...todos, newTaskValue];
      persistList(newList);
      setTodo(newList);
    }

    function handleDeleteTodo(index) {
      const newList = todos.filter((todo, todoIndex) => todoIndex != index);
      persistList(newList);
      setTodo(newList);
    }

    function handleEditTodo(index) {
      const taskToEdit = todos[index];
      handleDeleteTodo(index);
      setnewTaskValue(taskToEdit);
    }

    return (
      <>
        <ToDoInput newTaskValue={newTaskValue} setnewTaskValue={setnewTaskValue} addTask={handleAddToDo}/>
        <ToDoList deleteTask = {handleDeleteTodo} editTask = {handleEditTodo} todos={todos}/>
      </>
    )
}

export default App
