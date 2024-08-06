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
      if(!localTodos) {
        return;
      }
      localTodos = JSON.parse(localTodos).todos;
      setTodo(localTodos);
    }, []);

    function persistList(newList) {
      localStorage.setItem('todos', JSON.stringify({todos: newList}));
    }

    function handleTaskMovement(index, direction) {
      let taskList = [...todos];
      let temp = taskList[index];

      if(direction == true && index > 0) { // Move Up
        taskList[index] = taskList[index-1];
        taskList[index-1] = temp;
      } 
      else if(direction == false && index < taskList.length-1) { // Move Down
        taskList[index] = taskList[index+1];
        taskList[index+1] = temp;
      } 
      else {
        return;
      }
      persistList(taskList);
      setTodo(taskList);
    }

    function handleAddTask(newValue) {
      let newTaskValue = newValue.trim();
      console.log("TaskValue: ",newTaskValue,".");
      if(newTaskValue == "") {
        return;
      }
      const newList = [...todos, newTaskValue];
      persistList(newList);
      setTodo(newList);
    }

    function handleDeleteTask(index) {
      const newList = todos.filter((todo, todoIndex) => todoIndex != index);
      persistList(newList);
      setTodo(newList);
    }

    function handleEditTask(index) {
      const taskToEdit = todos[index];
      handleDeleteTask(index);
      setnewTaskValue(taskToEdit);
    }

    return (
      <>
        <ToDoInput newTaskValue={newTaskValue} setnewTaskValue={setnewTaskValue} addTask={handleAddTask}/>
        <ToDoList deleteTask={handleDeleteTask} editTask={handleEditTask} moveTask={handleTaskMovement} todos={todos}/>
      </>
    )
}

export default App
