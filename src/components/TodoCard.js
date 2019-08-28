import React, { Component } from 'react'
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';
import styled from 'styled-components'

const TodoCardSC= styled.article`
    margin:5%;
    padding: 5%;
    background: #5cc2aa70;
    border-radius: 5px;
`;

class TodoCard extends Component {
    state= {
        editing: false
    }

    updateEditingCard = () => {
        this.setState({
            editing: !this.state.editing,
        })
    }

    render() {
        const {todo, getTodos } = this.props;
        const { editing } = this.state;
        return (
            <TodoCardSC key={todo._id}>
                {!editing ?
                <>
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>
                </>
                : null
                }
                <UpdateTodo editing={editing} updateEditingCard={this.updateEditingCard} getTodos={getTodos} todo={todo}></UpdateTodo>
                <DeleteTodo getTodos={getTodos} todo={todo}></DeleteTodo>
            </TodoCardSC>
        )
    }
}

export default TodoCard; 