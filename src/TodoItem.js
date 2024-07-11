import React from "react";

class TodoItem extends React.Component {
  render() {
    const { todo, onDelete } = this.props;

    return (
      <div>
        <span className="text">{todo.text}</span>
        <input type="checkbox" />
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          X
        </button>
      </div>
    );
  }
}

export default TodoItem;
