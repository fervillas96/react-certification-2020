import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { useAuth } from '../../providers/Auth';
import LoginModal from '.';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

describe('LoginModal Component test suite', () => {
  it('Login user', () => {
    const login = jest.fn();
    useAuth.mockReturnValue({ login });
    // eslint-disable-next-line react/jsx-filename-extension
    render(<LoginModal open handleClose={jest.fn()} />);

    userEvent.type(screen.getByTestId('username-form'), 'Wizeline');
    userEvent.type(screen.getByTestId('password-form'), 'Rocks!');

    userEvent.click(screen.getByText('Login'));

    expect(login).toBeCalled();
  });
});
