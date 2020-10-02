const { axiosClient } = require('../utils/axios');

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

module.exports = {
  search: async (search, searchSize) => {
    try {
      console.log('YOUTUBE SEARCH SERVICE: STARTING');
      const axiosCall = axiosClient();
      console.log('YOUTUBE SEARCH SERVICE: PARAMS');
      const params = {
        part: 'snippet',
        key: `${REACT_APP_YOUTUBE_API_KEY}`,
        type: 'video',
        maxResults: searchSize,
        q: search,
      };
      console.log('YOUTUBE SEARCH SERVICE: BEFORE GET');
      const videos = await axiosCall.get('/search', { params });
      console.log('YOUTUBE SEARCH SERVICE: RESULTS');
      console.log(videos.data);
      return videos.data;
    } catch (error) {
      return error;
    }
  },
  recomend: async (videoId, searchSize) => {
    try {
      console.log('YOUTUBE RECOMENDATIONS SERVICE: STARTING');
      const axiosCall = axiosClient();
      console.log('YOUTUBE RECOMENDATIONS SERVICE: PARAMS');
      const params = {
        part: 'snippet',
        key: `${REACT_APP_YOUTUBE_API_KEY}`,
        type: 'video',
        maxResults: searchSize,
        relatedToVideoId: videoId,
      };
      console.log('YOUTUBE RECOMENDATIONS SERVICE: BEFORE GET');
      const recomendations = await axiosCall.get('/search', { params });
      console.log('YOUTUBE RECOMENDATIONS SERVICE: RESULTS');
      console.log(recomendations.data);
      return recomendations.data;
    } catch (error) {
      return error;
    }
  },
};
