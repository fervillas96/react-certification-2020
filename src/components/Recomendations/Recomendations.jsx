import React, { useEffect } from 'react';

import styled from 'styled-components';
import VideoInfoCard from '../VideoInfoCard';
import { useSearchProvider } from '../../providers/Search/Search.provider';

const RecomendationsContainer = styled.div`
  padding: 30px;
  flex-basis: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 200px;
  /* border: 1px solid blue; */
`;

const Recomendations = ({ videoId }) => {
  const { searchRecomendations, recomendations } = useSearchProvider();

  useEffect(() => {
    searchRecomendations(videoId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <RecomendationsContainer>
      {recomendations?.items?.map((videoData) => (
        <VideoInfoCard video={videoData} key={videoData.videoId} />
      ))}
    </RecomendationsContainer>
  );
};

export default Recomendations;
