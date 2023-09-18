import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '22969574-6aad5b2f74d6cb304dd2a3ef9';

const getPerPageValue = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 2560) {
    return 16;
  } else {
    return 12;
  }
};

const fetchImages = async (query, page) => {
  const perPage = getPerPageValue();
  try {
    const response = await axios.get(
      `${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}`,
    );

    if (!response.data.hits) {
      throw new Error('No results found');
    }

    return response.data;
  } catch (error) {
    throw new Error(`An error has occurred: ${error.message}`);
  }
};

export default {
  fetchImages,
};
