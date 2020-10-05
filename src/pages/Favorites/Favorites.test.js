import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useFavoritesContext } from '../../providers/Favorites/Favorites.provider';
import VideoProvider from '../../providers/VideoData';
import Favorites from '.';

jest.mock('../../providers/Favorites/Favorites.provider', () => ({
  useFavoritesContext: jest.fn(),
}));

describe('Favorites pages test suite', () => {
  it('Render favorites', () => {
    const state = {
      favorites: {
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
    useFavoritesContext.mockReturnValue({
      state,
    });
    // eslint-disable-next-line react/jsx-filename-extension
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <BrowserRouter>
        <VideoProvider>
          <Favorites />
        </VideoProvider>
      </BrowserRouter>
    );
  });
});
