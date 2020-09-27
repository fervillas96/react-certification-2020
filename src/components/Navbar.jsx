import React from 'react';

import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  InputBase,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import LoginModal from './LoginModal';
import wizelogo from '../assets/images/logo.png';
import { useAuth } from '../providers/Auth';
// import { useSearchBarProvider } from '../providers/Search/Search.provider';

const UserAccountContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

const WizeIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

const LeftNavbarSide = styled.a`
  cursor: pointer;
  display: flex;
  font-size: 30px;
  padding-left: 5px;
  align-items: center;
  margin-right: 50px;
  &:visited {
    color: white;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: '#21292A',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    loginButton: {
      backgroundColor: '#364345',
      color: '#fff',
    },
  },
}));

function Navbar({ onDisplayMenu }) {
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  // const { searchVideo } = useSearchBarProvider();
  // FOR LOGIN MODAL
  const [openModal, setOpenModal] = React.useState(false);

  // FOR ACCOUNT MENU
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfileMenu = Boolean(anchorEl);

  const classes = useStyles();
  const getVideos = (value) => {
    setTimeout(() => {
      console.log(value);
      // searchVideo(value);
    }, 1000);
  };

  // FUNCTIONS FOR OPENING AND CLOSING LOGIN MODAL
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // FUNCTIONS FOR OPENING AND CLOSING MENU ITEM
  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOutAccount = () => {
    setAnchorEl(null);
    logout();
    history.push('/home');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onDisplayMenu}
          >
            <MenuIcon />
          </IconButton>
          <LeftNavbarSide href="/home">
            <WizeIcon src={wizelogo} />
            Tube
          </LeftNavbarSide>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={(e) => getVideos(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <UserAccountContainer>
            {!authenticated && (
              <Button color="inherit" onClick={handleOpenModal}>
                {' '}
                Login
              </Button>
            )}
            {authenticated && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openProfileMenu}
                  onClose={handleCloseAccountMenu}
                >
                  <MenuItem onClick={handleLogOutAccount}>Logout</MenuItem>
                </Menu>
              </div>
            )}
            <LoginModal open={openModal} handleClose={handleCloseModal} />
          </UserAccountContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
