import React from "react";

function Todo({text, todos, todoItems, setTodoItems}) {
    const deleteHandler = () => {
        setTodoItems(todoItems.filter(el => el.id !== todos.id))
    }

    const completeHandler = () => {
        setTodoItems(todoItems.map(item => {
            if (item.id === todos.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todos.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo