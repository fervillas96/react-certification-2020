import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import SearchBarProvider from '../../providers/Search';
import VideoProvider from '../../providers/VideoData';
import FavoritesProvider from '../../providers/Favorites';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import Navbar from '../Navbar';
import SideBar from '../SideBar';

function App() {
  const [state, setState] = useState(false);
  const menu = 'left';
  const options = ['home'];

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <BrowserRouter>
      <>
        <AuthProvider>
          <FavoritesProvider>
            <SearchBarProvider>
              <Navbar onDisplayMenu={() => toggleDrawer(menu, true)} />
              <SideBar
                anchor={menu}
                open={state}
                onClose={() => toggleDrawer(menu, false)}
                options={options}
              />
              <Switch>
                <Route exact path="/home">
                  <VideoProvider>
                    <HomePage />
                  </VideoProvider>
                </Route>
                <Route exact path="/favorites">
                  {/* <FavoritesPage /> */}
                </Route>
                <Route exact path="/video/:videoId">
                  <VideoProvider>
                    <VideoPage />
                  </VideoProvider>
                </Route>
                <Route exact path="/">
                  <VideoProvider>
                    <HomePage />
                  </VideoProvider>
                </Route>
              </Switch>
            </SearchBarProvider>
          </FavoritesProvider>
        </AuthProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
