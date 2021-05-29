import React, { Component, PureComponent } from 'react'
import Action from './Action';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';

class Todo extends PureComponent {
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
        if (this.state.todos.find(item => item.toLowerCase() === option.toLowerCase())) {
            return 'This option is already exist in todos';
        }
        const preState = [...this.state.todos];
        preState.unshift(option);
        this.setState({ todos: preState });
    }

    handleDeleteTodoItem = (option) => {
        let prevTodos = [...this.state.todos];
        prevTodos = prevTodos.filter(todo => todo !== option);
        this.setState({ todos: prevTodos });
    }

    componentDidMount() {
        console.log('componentDidMount .....')
    }

    componentDidUpdate(prevProp, prevState) {
        console.log('componentDidUpdate', prevProp, prevState)
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log('shouldComponentUpdate', nextProp, nextState);
        if (nextState.todos.length === 5) {
            return false;
        } else {
            return true;
        }
    }

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount .....')
    }

    render() {
        console.log('render ', this.state.todos)
        return (
            <div>
                <Header title={this.data.title} subTitle={this.data.subTitle} />
                <Action hasTodos={this.state.todos.length} handleRemoveAll={this.removeAll} handleRandomOptionPick={this.handleRandomOptionPick} />
                <TodoList todos={this.state.todos} handleDeleteTodoItem={this.handleDeleteTodoItem} />
                <AddTodo handleAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default Todo
