import React, { useEffect } from 'react';

import styled from 'styled-components';
import VideoInfoCard from './VideoInfoCard';
import { useSearchBarProvider } from '../providers/Search/Search.provider';

const RecomendationsContainer = styled.div`
  padding: 30px;
  flex-basis: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 200px;
  border: 1px solid blue;
`;

const Recomendations = ({ videoId }) => {
  const { searchRecomendations, recomendations } = useSearchBarProvider();

  useEffect(() => {
    searchRecomendations(videoId);
  }, [searchRecomendations, videoId]);

  return (
    <RecomendationsContainer>
      {recomendations &&
        recomendations.items &&
        recomendations.items.map((videoData) => <VideoInfoCard video={videoData} />)}
    </RecomendationsContainer>
  );
};

export default Recomendations;
