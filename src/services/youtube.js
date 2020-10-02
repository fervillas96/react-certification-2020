const { axiosClient } = require('../utils/axios');

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

export const search = async (query, searchSize) => {
  try {
    const axiosCall = axiosClient();
    const params = {
      part: 'snippet',
      key: `${REACT_APP_YOUTUBE_API_KEY}`,
      type: 'video',
      maxResults: searchSize,
      q: query,
    };
    const videos = await axiosCall.get('/search', { params });
    return videos.data;
  } catch (error) {
    return error;
  }
};
export const recomend = async (videoId, searchSize) => {
  try {
    const axiosCall = axiosClient();
    const params = {
      part: 'snippet',
      key: `${REACT_APP_YOUTUBE_API_KEY}`,
      type: 'video',
      maxResults: searchSize,
      relatedToVideoId: videoId,
    };
    const recomendations = await axiosCall.get('/search', { params });
    return recomendations.data;
  } catch (error) {
    return error;
  }
};
