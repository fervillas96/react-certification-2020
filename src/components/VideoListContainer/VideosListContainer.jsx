import React from 'react';

import styled from 'styled-components';
import VideoInfoCard from '../VideoInfoCard';

const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`;

const VideosListContainer = ({ videos }) => {
  return (
    <VideosContainer>
      {videos?.items?.map((videoData) => (
        <VideoInfoCard video={videoData} key={videoData.id.videoId} />
      ))}
    </VideosContainer>
  );
};

export default VideosListContainer;
