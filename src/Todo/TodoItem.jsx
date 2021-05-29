import React from 'react'

const TodoItem = ({ todo, handleDeleteTodoItem }) => {
    return (
        <div>
            {todo} <button onClick={() => handleDeleteTodoItem(todo)}> X </button>
        </div>
    )
}

export default TodoItem
