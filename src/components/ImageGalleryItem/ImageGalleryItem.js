import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";
import defaultImage from "./default-image.jpg";

function ImageGalleryItem({ image = defaultImage, largeImage, tags, onModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={image}
        alt={tags}
        onClick={() => onModal(largeImage)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onModal: PropTypes.func,
};

export default ImageGalleryItem;
