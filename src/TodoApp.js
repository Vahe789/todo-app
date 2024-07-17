import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SearchInput from "./SearchInput";

class TodoApp extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      todos: [
        { id: 1, text: "Eat healthy", completed: false },
        { id: 2, text: "Go to the gym", completed: true },
        { id: 3, text: "Study every day", completed: false },
        { id: 4, text: "Meeting with Boss", completed: true },
      ],
      filter: "",
    };
  }

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

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
    const { todos, filter } = this.state;

    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="todo-list">
        <h1>Todo App</h1>
        <TodoForm onAdd={this.handleAddTodo} />
        <SearchInput onFilterChange={this.handleFilterChange} />
        <TodoList todos={filteredTodos} onDelete={this.handleDeleteTodo} />
      </div>
    );
  }
}

export default TodoApp;
