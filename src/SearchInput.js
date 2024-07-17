import React, { Component } from "react";

class SearchInput extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      filter: "",
    };
  }

  handleInputChange = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
    this.props.onFilterChange(filter);
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <input
          className="Search-input"
          type="text"
          placeholder="Search Task..."
          value={filter}
          onChange={this.handleInputChange}
        />
      </>
    );
  }
}

export default SearchInput;
