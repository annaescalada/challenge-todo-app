import React, { Component } from 'react'
import Button from './Button';
import styled from 'styled-components'
import todoService from '../services/todo-service';

const InputTextSC = styled.input`
    font-size: 15px;
    width:100%;
    height: 50px;
    border-left: none;
    border-top: none;
    border-right: none;
    border-radius: 0px;
    background-color: white;
    color: #000;
    margin: 2% 0 2% 0;
`;

const CreateTodoContainerSC = styled.div`
    margin: 20% 0;
`;


class CreateNewTodo extends Component {
    state= {
        title: '',
        body: '',
        error: '',
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({
          [name]: value,
          error:'',
        });
      }

    handleClick = () => {
        const {title, body} = this.state;
        const newTodo = { title, body };
        todoService.createTodo(newTodo)
        .then(data => {
            console.log(data);
            this.props.getTodos();
        })
        .catch( error => {
            console.log(error);
          })
    }

    render() {
        const {title, body} = this.state;
        return (
            <CreateTodoContainerSC>
                <h3>Create a new To Do:</h3>
                <InputTextSC placeholder='Title' id='title' type='text' name='title' value={title} onChange={this.handleChange}/>
                <InputTextSC placeholder='Description' id='body' type='text' name='body' value={body} onChange={this.handleChange}/>
                <Button click={this.handleClick}>Create new to do</Button>
            </CreateTodoContainerSC>
        )
    }
}

export default CreateNewTodo;