import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

export default class TodoList extends Component{
    state = {
        todos: []
    }

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                // nadpisuje tylko props task
                return{...todo, task: updatedTask}
            }
            // jezeli nie to zwracamy todo niezmienione
            return todo;
        })
        this.setState({todos: updatedTodos})
    }

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                // nadpisuje tylko props task
                return{...todo, completed: !todo.completed}
            }
            // jezeli nie to zwracamy todo niezmienione
            return todo;
        })
        this.setState({todos: updatedTodos})
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return (
                 <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo.task} 
                    completed={todo.completed}
                    removeTodo={this.remove}
                    updateTodo={this.update}
                    toggleTodo={this.toggleCompletion}
                />
            )
        })
        return(
            <div className='TodoList'>
                <h1>
                    TodoList <span>A Simple React Todo List App</span>
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create}/>
            </div>
        )
    }
}