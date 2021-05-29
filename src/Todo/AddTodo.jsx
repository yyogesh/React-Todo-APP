import React from 'react'

class AddTodo extends React.Component {
    //
    constructor(props) {
        super(props)
        this.state = {
            error: undefined
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target, event.currentTarget.todo.value);
        const option = event.currentTarget.todo.value;
        if (option) {
            const error = this.props.handleAddTodo(option);
            this.setState({ error })
            event.currentTarget.todo.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
