import React, { Component } from "react";
import SearchBar from "./components/Searchbar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    imageSearch: "",
  };
  handlFormSubmit = (imageSearch) => {
    this.setState({ imageSearch });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handlFormSubmit} />
        <ImageGallery imageSearch={this.state.imageSearch} />
      </div>
    );
  }
}

export default App;
