import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.component';
import Home from './pages/home.page';
import UserProfile from './pages/userProfile.page';
import * as config from './envConfig';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
    alert: {},
  };

  searchUsers = async (query) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `${config.apiURI}/search/users?client_id=${config.clientId}&client_secret=${config.clientSecrect}&q=${query}`,
    );
    console.log(response);
    if (
      response.status === 200 &&
      response.statusText === 'OK' &&
      response.data.items.length
    ) {
      this.setState({ users: response.data.items });
      this.setState({
        alert: {
          message: `Users found : ${response.data.items.length}`,
        },
      });
    } else {
      this.setState({
        alert: { type: 'error', message: 'No user found, please try again !' },
      });
    }
    // response.then((res) => this.setState({ users: res.data.items }));
    this.setState({ loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `${config.apiURI}/users/${username}?client_id=${config.clientId}&client_secret=${config.clientSecrect}`,
    );
    if (response.status === 200 && response.statusText === 'OK')
      this.setState({ user: response.data });
    this.setState({ loading: false });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `${config.apiURI}/users/${username}/repos?client_id=${config.clientId}&client_secret=${config.clientSecrect}`,
    );
    if (response.status === 200 && response.statusText === 'OK') {
      this.setState({ userRepos: response.data });
    }
    this.setState({ loading: false });
  };

  setAlert = () => this.setState({ alert: {} });

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home
                searchUsers={this.searchUsers}
                users={this.state.users}
                loading={this.state.loading}
                alert={this.state.alert}
                setAlert={this.setAlert}
              />
            </Route>
            {/* user profile route */}
            <Route path="/user/:login">
              <UserProfile
                getUser={this.getUser}
                user={this.state.user}
                loading={this.state.loading}
                getUserRepos={this.getUserRepos}
                repos={this.state.userRepos}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
