import React from 'react'

const AddTodo = ({ handleAddTodo }) => {
    //

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target, event.currentTarget.todo.value);
        const option = event.currentTarget.todo.value;
        if (option) {
            handleAddTodo(option);
            // data.todos.unshift(option);
            event.currentTarget.todo.value = '';
            // this.state.todos.push('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
