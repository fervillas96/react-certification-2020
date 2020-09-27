import React, { useState, useEffect, useContext, useCallback } from 'react';

import { axiosClient } from '../../utils/axios';

const SearchBarContext = React.createContext(null);

function useSearchBarProvider() {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error(`Can't use "userSearchBarProvider" without an SearchBarProvider!`);
  }
  return context;
}

function SearchBarProvider({ children }) {
  const [videos, setVideos] = useState({});
  const [recomendations, setRecomendations] = useState({});

  useEffect(() => {
    const axiosCall = axiosClient();
    axiosCall.get('/search', { q: 'Soccer', maxResults: 12 }).then((apiResult) => {
      setVideos(apiResult.data);
    });
  }, []);

  const searchVideo = useCallback(async (search) => {
    const axiosCall = axiosClient();
    const searchedVideos = await axiosCall.get('/search', { q: search, maxResults: 12 });
    setVideos(searchedVideos.data);
  }, []);

  const searchRecomendations = useCallback(async (videoId) => {
    const axiosCall = axiosClient();
    const relatedVideos = await axiosCall.get('/search', {
      relatedToVideoId: videoId,
      maxResults: 3,
    });

    setRecomendations(relatedVideos.data);
  }, []);

  return (
    <SearchBarContext.Provider
      value={{ searchVideo, searchRecomendations, videos, recomendations }}
    >
      {children}
    </SearchBarContext.Provider>
  );
}

export { useSearchBarProvider };
export default SearchBarProvider;
