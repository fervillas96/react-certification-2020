import React from 'react';

import VideoListContainer from '../../components/VideoListContainer';
import { useFavoritesProvider } from '../../providers/Favorites/Favorites.provider';

function FavoritesPage() {
  const { state } = useFavoritesProvider();
  const videos = {};
  const items = [];

  Object.entries(state.favorites).map((data) => {
    items.push(data[1]);
    return data;
  });

  if (items.length >= 1) {
    videos.items = items;
  }

  return (
    <section className="homepage">
      <VideoListContainer videos={videos} />
    </section>
  );
}

export default FavoritesPage;
