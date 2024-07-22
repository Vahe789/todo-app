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
      filtering: "all",
      filter: "",
      filteredApps: [],
    };
  }

  componentDidMount() {
    this.setState({ filteredTodos: this.state.todos });
  }

  handleToggleStatus = (id, done) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, done } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  handleFilteringChange = (filtering) => {
    this.setState({ filtering });
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
    const { filtering, todos, filter, filteredApps } = this.state;

    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="todo-list">
        <h1>Todo App</h1>
        <TodoForm onAdd={this.handleAddTodo} />
        <SearchInput
          onFilterChange={this.handleFilterChange}
          todos={filteredApps}
        />
        <div className="Filtering-buttons">
          <button
            className="All-button"
            onClick={() => this.handleFilteringChange("all")}
          >
            All
          </button>
          <button
            className="Completed-button"
            onClick={() => this.handleFilteringChange("completed")}
          >
            Completed
          </button>
          <button
            className="Not-completed-button"
            onClick={() => this.handleFilteringChange("Not Completed")}
          >
            Not Completed
          </button>
        </div>

        <TodoList
          todos={filteredTodos}
          onDelete={this.handleDeleteTodo}
          onToggleStatus={this.handleToggleStatus}
          onFilteringChange={this.handleFilteringChange}
          filtering={filtering}
        />
      </div>
    );
  }
}

export default TodoApp;
