import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleDeleteTodoItem }) => {
    return (
        <div>
            <div>
                {
                    todos.map((item, index) => {
                        return <TodoItem todo={item} key={index} handleDeleteTodoItem={handleDeleteTodoItem} />
                    })
                }
            </div>
        </div>
    )
}

export default TodoList
