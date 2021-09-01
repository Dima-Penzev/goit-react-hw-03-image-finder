import axios from "axios";
import PropTypes from "prop-types";

axios.defaults.baseURL = "https://pixabay.com/api";
const apiKey = "22290512-61c8db1e23d404eb0727e3aee";

function fetchImages(searchQuerry, currentPage = 1, perPage = 12) {
  return axios
    .get(
      `/?q=${searchQuerry}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then((response) => response.data.hits);
}

fetchImages.propTypes = {
  searchQuerry: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
};

export default fetchImages;
