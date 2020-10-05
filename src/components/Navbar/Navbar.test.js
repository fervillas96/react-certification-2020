import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useAuth } from '../../providers/Auth';
import SearchProvider from '../../providers/Search';
import Navbar from '.';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Navbar Component test suite', () => {
  it('Test log out', () => {
    const logout = jest.fn();
    useAuth.mockReturnValue({ authenticated: true, logout });

    const { getByTestId } = render(
      // eslint-disable-next-line react/jsx-filename-extension
      <SearchProvider>
        <Navbar />
      </SearchProvider>
    );

    userEvent.click(getByTestId('logout-button'));
    expect(screen.getByText('Logout')).toBeTruthy();

    userEvent.click(screen.getByText('Logout'));
    expect(logout).toBeCalled();
  });
});
