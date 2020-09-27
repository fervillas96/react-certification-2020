import React, { useState, useContext, useCallback } from 'react';

const VideoContext = React.createContext(null);

function useVideoProvider() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideoProvider" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [currentVideo, setCurrentVideo] = useState({});

  const setCurrentVideoData = useCallback((newCurrentData) => {
    setCurrentVideo(newCurrentData);
  }, []);

  return (
    <VideoContext.Provider value={{ setCurrentVideoData, currentVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export { useVideoProvider };
export default VideoProvider;
