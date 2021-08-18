import React from "react";

function Form({inputText, setStatus, status, setInputText, todoItems, setTodoItems}) {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTodoItems([
            ...todoItems,
            {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("")
    }

    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }

    return(
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form