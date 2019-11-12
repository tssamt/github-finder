import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.component';
import Home from './pages/home.page';
import UserProfile from './pages/userProfile.page';
import GithubProvider from './context/github/githubProvider';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <GithubProvider>
          <Switch>
            {/* home page route */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* user profile route */}
            <Route path="/user/:login">
              <UserProfile />
            </Route>
          </Switch>
        </GithubProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
