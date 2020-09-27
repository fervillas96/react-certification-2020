const axios = require('axios');

module.exports = () => {
  const { REACT_APP_YOUTUBE_API_KEY, REACT_APP_YOUTUBE_API_URL } = process.env;
  return axios.create({
    'Cache-Control': 'no-cache',
    baseURL: `${REACT_APP_YOUTUBE_API_URL}`,
    params: {
      part: 'snippet',
      key: `${REACT_APP_YOUTUBE_API_KEY}`,
      type: ['video'],
      maxResults: 4,
      q: 'Pokemon',
    },
  });
};
