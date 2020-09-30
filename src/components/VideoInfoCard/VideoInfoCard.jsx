import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { useVideoProvider } from '../../providers/VideoData/VideoData.provider';

const VideoCard = styled.div`
  cursor: pointer;
  flex-basis: 20%;
  background-color: white;
  /* border: 1px solid green; */
  border-radius: 10px;
  box-shadow: 1px 2px;
  margin: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  padding: 5px;
  color: #000;
  text-align: left;

  .video-description {
    font-size: 16px;
  }

  .video-chanel {
    font-size: 12px;
  }
`;

const VideoInfoCard = ({ video }) => {
  const { setCurrentVideoData } = useVideoProvider();

  const setNewVideoInfo = (videoData) => {
    setCurrentVideoData(videoData);
  };

  return (
    <VideoCard>
      <Link to={`/video/${video.id.videoId}`} onClick={() => setNewVideoInfo(video)}>
        <ImageContainer>
          <img src={video.snippet.thumbnails.medium.url} alt="Thumnail" />
        </ImageContainer>
        <DescriptionContainer>
          <p className="video-description"> {video.snippet.title} </p>
          <p className="video-chanel"> {video.snippet.channelTitle} </p>
        </DescriptionContainer>
      </Link>
    </VideoCard>
  );
};

export default VideoInfoCard;
