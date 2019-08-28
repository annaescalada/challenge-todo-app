import React, { Component } from 'react'
import Button from './Button';
import styled from 'styled-components'
import todoService from '../services/todo-service';

const InputTextSC = styled.input`
    font-size: 15px;
    width:100%;
    height: 50px;
    font-family: 'Raleway', sans-serif;
    padding: 5%;
    border-left: none;
    border-top: none;
    border-right: none;
    border-radius: 0px;
    background-color: white;
    color: #000;
    margin: 2% 0 2% 0;
`;


class UpdateTodo extends Component {
    state={
        editing: this.props.editing,
        title: this.props.todo.title,
        body: this.props.todo.body
    }

    updateEditing = () => {
        this.setState({
            editing: !this.state.editing,
        })
        this.props.updateEditingCard();
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({
          [name]: value,
          error:'',
        });
      }

    handleClick = () => {
        const { title, body } = this.state;
        const newTodo = { title, body }
        todoService.updateTodo(this.props.todo._id, newTodo)
        .then(data => {
            console.log(data);
            this.props.getTodos();
            this.updateEditing();
        })
        .catch( error => {
            console.log(error);
          });
        }

    render() {
        const {editing, title, body} = this.state;
        return (
            <>
            {editing ?
            <>
                <InputTextSC placeholder={title} id='title' type='text' name='title' value={title} onChange={this.handleChange}/>
                <InputTextSC placeholder={title} id='body' type='text' name='body' value={body} onChange={this.handleChange}/>
                <Button click={this.handleClick}>Save changes</Button> 
                <Button reversed={true} click={this.updateEditing}>Cancel</Button> 
            </>
                :
            <Button click={this.updateEditing} reversed={true}>Update</Button>
             } 
             </>
        )
    }
}

export default UpdateTodo;