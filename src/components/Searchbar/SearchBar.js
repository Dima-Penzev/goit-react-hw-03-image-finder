import React, { Component } from "react";
import s from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    imageSearch: "",
  };

  handleNameChange = (e) => {
    this.setState({ imageSearch: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.imageSearch.trim() === "") {
      alert("Введите что-нибудь в строку для поиска");
      return;
    }
    this.props.onSubmit(this.state.imageSearch);
    this.setState({ imageSearch: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageSearch}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
