import React, { Component } from "react";
import s from "./App.module.css";
import Loader from "react-loader-spinner";
import SearchBar from "./components/Searchbar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageApi from "./services/image-api";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    imageSearch: "",
    hits: [],
    currentPage: 1,
    showModal: false,
    modalImage: "",
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageSearch !== this.state.imageSearch) {
      this.fetchImg();
    }
  }

  handlFormSubmit = (data) => {
    this.setState({ imageSearch: data, hits: [], currentPage: 1 });
  };

  fetchImg = () => {
    const { imageSearch, currentPage } = this.state;
    if (!imageSearch) {
      return;
    }
    this.setState({ loading: true });

    ImageApi(imageSearch, currentPage)
      .then((result) =>
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...result],
          currentPage: prevState.currentPage + 1,
          loading: false,
        }))
      )
      .catch((error) => {
        alert(`При загрузке изображений произошла ошибка ${error}`);
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  modalOpen = (largeImage) => {
    this.setState({ showModal: true, modalImage: largeImage });
  };

  modalClose = () => {
    this.setState({ showModal: false, modalImage: "" });
  };

  render() {
    const { loading, imageSearch, hits, showModal, modalImage } = this.state;
    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.handlFormSubmit} />
        {loading && (
          <Loader type="Circles" color="#00BFFF" height={180} width={180} />
        )}
        {imageSearch && (
          <ImageGallery images={hits} onImageClick={this.modalOpen} />
        )}
        {hits.length > 0 && (
          <Button text="Load more" onLoadClick={this.fetchImg} />
        )}
        {showModal && (
          <Modal onClose={this.modalClose}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
