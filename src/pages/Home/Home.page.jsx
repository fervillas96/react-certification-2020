import React from 'react';

import VideoListContainer from '../../components/VideoListContainer';
import { useSearchProvider } from '../../providers/Search/Search.provider';

function HomePage() {
  const { videos } = useSearchProvider();

  return (
    <section className="homepage">
      <VideoListContainer videos={videos} />
    </section>
  );
}

export default HomePage;
