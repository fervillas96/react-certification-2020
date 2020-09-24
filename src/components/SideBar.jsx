import React from 'react';

import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Option = styled(Link)`
  min-width: 240px;
  padding: 20px 20px;
  color: #fff;
  border-bottom: 2px solid #FC4C55;
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
    </Drawer>
  );
};

export default SideBar;
