import React from 'react';

import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useVideoProvider } from '../../providers/VideoData/VideoData.provider';
import { useFavoritesContext } from '../../providers/Favorites/Favorites.provider';

const VideoDataContainer = styled.div`
  padding: 30px;
  flex-basis: 100%;
  display: flex;
  flex: 3;
  flex-direction: column;
  /* border: 1px solid red; */
  min-height: 700px;
`;

const VideoPlayer = styled.iframe`
  width: 950px;
  height: 550px;
`;

const InfoContainer = styled.div`
  padding: 20px;

  .title {
    font-size: 20px;
    display: inline-block;
  }

  .description .channel {
    font-size: 14px;
    display: inline-block;
  }
`;

const Video = ({ videoId }) => {
  const { currentVideo } = useVideoProvider();
  const { setAsFavorite, removeFromFavorite, state } = useFavoritesContext();
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const isFavorite = state.favorites[videoId];

  return (
    <VideoDataContainer>
      <VideoPlayer src={videoUrl} title="Video" />

      <InfoContainer>
        {isFavorite && (
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => removeFromFavorite(videoId)}
            color="inherit"
          >
            <FavoriteIcon />
          </IconButton>
        )}
        {!isFavorite && (
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setAsFavorite(currentVideo)}
            color="inherit"
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
        <p className="title">{currentVideo?.snippet?.title}</p>
        <p className="description">{currentVideo?.snippet?.description}</p>
      </InfoContainer>
    </VideoDataContainer>
  );
};

export default Video;
