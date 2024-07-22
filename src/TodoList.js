import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { todos, onDelete, onToggleStatus } = this.props;
    const { filtering } = this.props;

    let filteredTodos = todos;

    if (filtering === "completed") {
      filteredTodos = todos.filter((todo) => todo.done);
    } else if (filtering === "Not Completed") {
      filteredTodos = todos.filter((todo) => !todo.done);
    }

    return (
      <div className="task-div">
        {filteredTodos.map((todo) => (
          <div className="item-div">
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
