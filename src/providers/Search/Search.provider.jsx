import React, { useState, useEffect, useContext, useCallback } from 'react';

import { axiosClient } from '../../utils/axios';

const SearchContext = React.createContext(null);

function useSearchProvider() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "userSearchProvider" without an SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [videos, setVideos] = useState({});
  const [recomendations, setRecomendations] = useState({});
  const { REACT_APP_YOUTUBE_API_KEY } = process.env;

  useEffect(() => {
    const axiosCall = axiosClient();
    const params = {
      part: 'snippet',
      key: `${REACT_APP_YOUTUBE_API_KEY}`,
      type: 'video',
      maxResults: 12,
      q: 'Wizeline',
    };
    axiosCall.get('/search', { params }).then((apiResult) => {
      setVideos(apiResult.data);
    });
  }, [REACT_APP_YOUTUBE_API_KEY]);

  const searchVideo = useCallback(
    async (search) => {
      const axiosCall = axiosClient();
      const params = {
        part: 'snippet',
        key: `${REACT_APP_YOUTUBE_API_KEY}`,
        type: 'video',
        maxResults: 12,
        q: search,
      };
      const searchedVideos = await axiosCall.get('/search', { params });
      setVideos(searchedVideos.data);
    },
    [REACT_APP_YOUTUBE_API_KEY]
  );

  const searchRecomendations = useCallback(
    async (videoId) => {
      const axiosCall = axiosClient();
      const params = {
        part: 'snippet',
        key: `${REACT_APP_YOUTUBE_API_KEY}`,
        type: 'video',
        maxResults: 3,
        relatedToVideoId: videoId,
      };
      const relatedVideos = await axiosCall.get('/search', { params });
      setRecomendations(relatedVideos.data);
    },
    [REACT_APP_YOUTUBE_API_KEY]
  );

  return (
    <SearchContext.Provider
      value={{ searchVideo, searchRecomendations, videos, recomendations }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { useSearchProvider };
export default SearchProvider;
