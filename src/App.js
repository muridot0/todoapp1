import React, {useState, useEffect} from "react";
import "./App.css"

import Todo from "./components/Todo"
import Todolist from "./components/Todolist"
import Form from "./components/Form"

function App() {
  const [inputText, setInputText] = useState("")
  const [todoItems, setTodoItems] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  const filteredTodosHandler = () => {
    switch(status) {
      case "completed": 
        setFilteredTodos(todoItems.filter(todos => todos.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todoItems.filter(todos => todos.completed === false))
        break
      default:
        setFilteredTodos(todoItems)
        break
    }
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todoItems") === null){
      localStorage.setItem("todoItems", JSON.stringify([]))
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todoItems"))
      setTodoItems(todoLocal)
    }
  }

  const saveLocalTodos = () => {
    if (localStorage.getItem("todoItems") === null){
      localStorage.setItem("todoItems", JSON.stringify([]))
    }else {
      localStorage.setItem("todoItems", JSON.stringify(todoItems))
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filteredTodosHandler()
    saveLocalTodos()
  }, [todoItems, status])

  return(
    <div className="App">
      <header>
        <h1>Muri's todo App</h1>
      </header>
      <Form status={status} setStatus={setStatus} inputText={inputText} setInputText={setInputText} todoItems={todoItems} setTodoItems={setTodoItems} />
      <Todolist filteredTodos={filteredTodos} todoItems={todoItems} setTodoItems={setTodoItems} inputText={inputText} setInputText={setInputText} />
    </div>
  )
}

export default App