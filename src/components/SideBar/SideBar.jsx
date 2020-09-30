import React from 'react';

import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const Option = styled(Link)`
  min-width: 240px;
  padding: 20px;
  color: #fff;
  border-bottom: 2px solid #fc4c55;
  &:hover {
    background-color: #364345;
  }
`;

const useStyles = makeStyles({
  paper: {
    background: '#21292A',
  },
});

const SideBar = ({ anchor, open, onClose, options }) => {
  const { authenticated } = useAuth();
  const classes = useStyles();
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor={anchor}
      open={open}
      onClose={() => onClose(anchor, false)}
    >
      {options.map((option) => (
        <Option to={`/${option}`} key={option}>
          {`${option.charAt(0).toUpperCase() + option.slice(1)}`}
        </Option>
      ))}
      {authenticated && (
        <Option to="/favorites" key="favorites">
          Favorites
        </Option>
      )}
    </Drawer>
  );
};

export default SideBar;
