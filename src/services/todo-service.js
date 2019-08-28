import axios from 'axios';

class TodoService {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    })
  }

  getTodos() {
    return this.todo.get('/todos')
      .then(({ data }) => data);
  }

  createTodo(todo) {
    return this.todo.post('todos', todo)
    .then(({data}) => data);
  }

  deleteTodo(todoID) {
    return this.todo.delete(`todos/${todoID}`)
    .then(({data}) => data);
  }

  updateTodo(todoID, updatedTodo) {
    return this.todo.put(`todos/${todoID}`, updatedTodo)
  }
}

const todoService = new TodoService();

export default todoService;