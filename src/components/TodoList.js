import React from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {
    return (
        <>
        <h3>To Do list</h3>
        {props.todos ? props.todos.map(todo => {
            return (
                <TodoCard key={todo._id} todo={todo} getTodos={props.getTodos}></TodoCard>
            )
        }) : null}
        </>
    )
}

export default TodoList
