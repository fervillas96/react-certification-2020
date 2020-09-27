import React from 'react';

import styled from 'styled-components';
import VideoInfoCard from './VideoInfoCard';
import { useSearchBarProvider } from '../providers/Search/Search.provider';

const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`;

const VideosListContainer = () => {
  const { videos } = useSearchBarProvider();

  return (
    <VideosContainer>
      {videos &&
        videos.items &&
        videos.items.map((videoData) => (
          <VideoInfoCard video={videoData} key={videoData.id.videoId} />
        ))}
    </VideosContainer>
  );
};

export default VideosListContainer;
