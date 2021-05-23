import React, { Component } from 'react'
import Action from './Action';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

class Todo extends Component {
    state = {
        todos: ['Study', 'Playing']
    }
    data = {
        title: 'Todo list',
        subTitle: 'Manage your daily todos',
    }

    removeAll = () => {
        this.setState({ todos: [] })
    }

    handleRandomOptionPick = () => {
        const randomNum = Math.floor(Math.random() * this.state.todos.length);
        alert(this.state.todos[randomNum])
    }

    handleAddTodo = (option) => {
        const preState = [...this.state.todos];
        preState.unshift(option);
        this.setState({ todos: preState });
    }

    render() {
        console.log('render ', this.state.todos)
        return (
            <div>
                <Header title={this.data.title} subTitle={this.data.subTitle} />
                <Action hasTodos={this.state.todos.length} handleRemoveAll={this.removeAll} handleRandomOptionPick={this.handleRandomOptionPick} />
                <TodoList todos={this.state.todos} />
                <AddTodo handleAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default Todo
