import React, { Component } from 'react'
import Button from './Button';
import todoService from '../services/todo-service';

class DeleteTodo extends Component {

    handleClick = (todoID) => {
        console.log('click');
        todoService.deleteTodo(todoID)
        .then(data => {
            console.log(data);
            this.props.getTodos();
        })
        .catch( error => {
            console.log(error);
          });
        }

    render() {
        const { todo } = this.props;
        return (
            <Button click={() => this.handleClick(todo._id)} reversed={true}>Delete</Button>
        )
    }
}

export default DeleteTodo; 
