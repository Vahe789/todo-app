import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Enter Task..."
        />
        <button type="submit" className="submit-button">
          Add Task
        </button>
      </form>
    );
  }
}

export default TodoForm;
