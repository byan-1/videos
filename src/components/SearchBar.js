import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = (event) => {
      this.setState({ term: event.target.value })
    }
    this.onFormSubmit = (event) => {
      event.preventDefault();
      this.props.formSubmit(this.state.term);
    }
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Video Search</label>
          <input 
            type="text" 
            value={this.state.term} 
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
