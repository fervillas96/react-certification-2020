import React from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Video from '../../components/Video';
import Recomendations from '../../components/Recomendations';
import { useVideoProvider } from '../../providers/VideoData/VideoData.provider';

const VideoPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

function VideoPage() {
  const { videoId } = useParams();
  const { currentVideo } = useVideoProvider();
  console.log('... Current Video DATA ...');
  console.log(currentVideo);
  return (
    <VideoPageContainer>
      <Video videoId={videoId} />
      <Recomendations videoId={videoId} />
    </VideoPageContainer>
  );
}

export default VideoPage;
