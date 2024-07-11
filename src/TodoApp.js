import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <div className="todo-list">
        <h1>Todo App</h1>
        <TodoForm onAdd={this.handleAddTodo} />
        <TodoList todos={this.state.todos} onDelete={this.handleDeleteTodo} />
      </div>
    );
  }
}

export default TodoApp;
