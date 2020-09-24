import React from 'react';
import { useHistory } from 'react-router';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useAuth } from '../providers/Auth';
import wizelogo from '../assets/images/logo.png';

const ModalBody = styled.section`
  padding: 30px;
  background-color: #21292a;
  border-radius: 10px;
  color: white;
  min-width: 400px;
  outline: none;
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
  const history = useHistory();
  const { login } = useAuth();
  const classes = useStyles();

  function authenticate(event) {
    event.preventDefault();
    login();
    handleClose();
    history.push('/home');
  }

  return (
    <Modal open={open} onClose={handleClose} className={classes.root}>
      <ModalBody>
        <RedLine />
        <LogoContainer>
          <WizeIcon src={wizelogo} />
        </LogoContainer>
        <form onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input required type="text" id="username" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input required type="password" id="password" />
            </label>
          </div>
          <LoginButton type="submit">Login</LoginButton>
        </form>
        <RedLine />
      </ModalBody>
    </Modal>
  );
}
