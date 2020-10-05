import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { render } from '../../tests/test-utils';
import App from '.';

describe('Navbar Component test suite', () => {
  it('Open sidebar', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { getByTestId } = render(<App />);

    userEvent.click(getByTestId('navbar-button'));
    expect(screen.getByText('Home')).toBeTruthy();

    // userEvent.click(screen.getByText('Login'));
    // expect(screen.getByText('Home')).toBeFalsy();
  });
});
