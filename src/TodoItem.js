import React from "react";

class TodoItem extends React.Component {
  handleToggle = () => {
    const { todo, onToggleStatus } = this.props;
    onToggleStatus(todo.id, !todo.done);
  };
  render() {
    const { todo, onDelete } = this.props;

    return (
      <div className="Todo-item">
        <span className="text">{todo.text}</span>
        {todo.done ? (
          <button onClick={this.handleToggle} className="Undone-button">
            Undone
          </button>
        ) : (
          <button onClick={this.handleToggle} className="Done-button">
            Done
          </button>
        )}
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          X
        </button>
      </div>
    );
  }
}

export default TodoItem;
