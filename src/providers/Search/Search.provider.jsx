import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
  search as searchVideos,
  recomend as recomendVideos,
} from '../../services/youtube';

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

  async function getVideos(search, searchSize) {
    const youtubeResponse = await searchVideos(search, searchSize);
    setVideos(youtubeResponse);
  }

  useEffect(() => {
    getVideos('Wizeline', 12);
  }, []);

  const searchVideo = useCallback(async (search) => {
    const youtubeResponse = await searchVideos(search, 12);
    setVideos(youtubeResponse);
  }, []);

  const searchRecomendations = async (videoId) => {
    const youtubeResponse = await recomendVideos(videoId, 3);
    setRecomendations(youtubeResponse);
  };

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
