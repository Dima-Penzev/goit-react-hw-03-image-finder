import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({ text, onLoadClick }) {
  return (
    <button className={s.Button} type="button" onClick={onLoadClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onLoadClick: PropTypes.func,
};

export default Button;
