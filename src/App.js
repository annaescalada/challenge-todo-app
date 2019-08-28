import React, { Component } from 'react';
import CreateNewTodo from './components/CreateNewTodo'
import styled from 'styled-components'
import './App.css';
import todoService from './services/todo-service';
import TodoList from './components/TodoList';

const AppTitleSC = styled.h1`
  text-align:center;
  font-size:25px;
`;

class App extends Component {
  state= {
    todos: '',
    isLoading: true,
  }

  getTodos = () => {
    todoService.getTodos()
    .then((todos) => {
      this.setState({
        todos,
        isLoading: false,
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    const {todos, isLoading} = this.state;
    return (
      <>
      {isLoading ?
      <p>Loading...</p>
      :
      <>
        <AppTitleSC>Welcome to todo App</AppTitleSC>
        <CreateNewTodo getTodos={this.getTodos} onClick={this.handleNewToDoClick}></CreateNewTodo>
        <TodoList getTodos={this.getTodos} todos={todos}></TodoList>
      </>
      }
      </>
    );
  }
}

export default App;
