import React from 'react';

import VideoListContainer from '../../components/VideosListContainer';
import { useFavoritesProvider } from '../../providers/Favorites/Favorites.provider';

function FavoritesPage() {
  const { state } = useFavoritesProvider();

  console.log('--- --- FAVORITES PAGE --- ---');
  console.log(state.length);

  return (
    <section className="homepage">
      <VideoListContainer videos={state} />
    </section>
  );
}

export default FavoritesPage;
