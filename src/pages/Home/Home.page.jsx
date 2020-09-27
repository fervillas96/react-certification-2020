import React from 'react';

import VideoListContainer from '../../components/VideosListContainer';
import { useSearchBarProvider } from '../../providers/Search/Search.provider';

function HomePage() {
  const { videos } = useSearchBarProvider();

  return (
    <section className="homepage">
      <VideoListContainer videos={videos} />
    </section>
  );
}

export default HomePage;
