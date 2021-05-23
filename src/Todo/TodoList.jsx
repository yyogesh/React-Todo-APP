import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
    return (
        <div>
            <div>
                {
                    todos.map((item, index) => {
                        return <TodoItem todo={item} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default TodoList
