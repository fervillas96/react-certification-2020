import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import Navbar from '../Navbar';
import SideBar from '../SideBar';

function App() {
  const [state, setState] = useState(false);
  const menu = 'left';
  const options = ['home', 'favorites'];

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <BrowserRouter>
      <>
        <AuthProvider>
          <Navbar onDisplayMenu={() => toggleDrawer(menu, true)} />
          <SideBar
            anchor={menu}
            open={state}
            onClose={() => toggleDrawer(menu, false)}
            options={options}
          />
          <Switch>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </AuthProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
