import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { todos, onDelete } = this.props;

    return (
      <div className="task-div">
        {todos.map((todo) => (
          <div className="item-div">
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
