// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import AuthProvider from '../providers/Auth';
import SearchProvider from '../providers/Search';
import VideoProvider from '../providers/VideoData';
import FavoritesProvider from '../providers/Favorites';

const AllTheProviders = ({ children }) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AuthProvider>
      <FavoritesProvider>
        <SearchProvider>
          <VideoProvider>{children}</VideoProvider>
        </SearchProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
