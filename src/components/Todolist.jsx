import React from "react";
import Todo from "./Todo"

function Todolist({todoItems, setTodoItems, filteredTodos}) {
  return(
    <div class="todo-container">
      <ul class="todo-list">
          {filteredTodos.map(todos => (
              <Todo 
              todoItems={todoItems}
              todos={todos}
              key={todos.id}
              text={todos.text} 
              setTodoItems={setTodoItems} 
              filteredTodos={filteredTodos}/>
          ))}
      </ul>
    </div>
  )
}

export default Todolist