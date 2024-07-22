import React, { Component } from "react";

class SearchInput extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      filter: "",
      filteredApps: [],
    };
  }

  handleInputChange = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
    this.props.onFilterChange(filter);
  };

  render() {
    const { filter } = this.props;

    return (
      <>
        <div className="Input">
          <input
            className="Search-input"
            type="text"
            placeholder="Search Task..."
            value={filter}
            onChange={this.handleInputChange}
          />
        </div>
      </>
    );
  }
}

export default SearchInput;
