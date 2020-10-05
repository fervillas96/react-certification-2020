import React from 'react';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import wizelogo from '../../assets/images/logo.png';

const ModalBody = styled.section`
  padding: 30px;
  background-color: #21292a;
  border-radius: 10px;
  color: white;
  min-width: 400px;
  outline: none;

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-group strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }

  .form-group input {
    color: white;
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .login-form button[type='submit'] {
    width: 5rem;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 3px;
  }
`;

const RedLine = styled.hr`
  width: 100%;
  border: 1px solid #fc4c55;
`;

const LoginButton = styled.button`
  color: white;
  background-color: #fc4c55;
  margin: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const WizeIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  },
});

export default function LoginModal({ open, handleClose }) {
  const { login } = useAuth();
  const classes = useStyles();

  function authenticate(event) {
    event.preventDefault();
    login();
    handleClose();
  }

  return (
    <Modal open={open} onClose={handleClose} className={classes.root}>
      <ModalBody>
        <RedLine />
        <LogoContainer>
          <WizeIcon src={wizelogo} />
        </LogoContainer>
        <form onSubmit={authenticate} className="login-form" data-testid="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input required type="text" id="username" data-testid="username-form" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input required type="password" id="password" data-testid="password-form" />
            </label>
          </div>
          <LoginButton type="submit">Login</LoginButton>
        </form>
        <RedLine />
      </ModalBody>
    </Modal>
  );
}
