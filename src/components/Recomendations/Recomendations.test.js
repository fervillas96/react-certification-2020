import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSearchProvider } from '../../providers/Search/Search.provider';
import VideoProvider from '../../providers/VideoData';
import Recomendations from '.';

jest.mock('../../providers/Search/Search.provider', () => ({
  useSearchProvider: jest.fn(),
}));

describe('Favorites pages test suite', () => {
  it('Render recomendations user', () => {
    const recomendations = {
      recomendations: {
        video: {
          id: {
            videoId: 'IDX01',
          },
          snippet: {
            thumbnails: {
              medium: {
                url: 'www.google.com',
              },
            },
          },
        },
      },
    };
    const searchRecomendations = jest.fn();
    useSearchProvider.mockReturnValue({
      searchRecomendations,
      recomendations,
    });
    // eslint-disable-next-line react/jsx-filename-extension
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <BrowserRouter>
        <VideoProvider>
          <Recomendations />
        </VideoProvider>
      </BrowserRouter>
    );

    expect(searchRecomendations).toBeCalled();
  });
});
