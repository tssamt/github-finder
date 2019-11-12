import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import * as config from '../../envConfig';

import {
  SEARCH_USERS,
  GET_USER,
  GET_USER_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
  SET_LOADING,
} from '../types';

const GithubProvider = (props) => {
  const initialState = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
    alert: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //   search user function
  const searchUsers = async (query) => {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await axios.get(
      `${config.apiURI}/search/users?client_id=${config.clientId}&client_secret=${config.clientSecrect}&q=${query}`,
    );
    if (
      response.status === 200 &&
      response.statusText === 'OK' &&
      response.data.items.length
    ) {
      dispatch({ type: SEARCH_USERS, payload: response.data.items });
      dispatch({
        type: SET_ALERT,
        payload: {
          message: `Users found : ${response.data.items.length}`,
        },
      });
    } else {
      dispatch({ type: SEARCH_USERS, payload: [] });
      dispatch({
        type: SET_ALERT,
        payload: {
          type: 'error',
          message: 'No user found, please try again !',
        },
      });
    }
    dispatch({ type: SET_LOADING, payload: false });
  };

  const getUser = async (username) => {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await axios.get(
      `${config.apiURI}/users/${username}?client_id=${config.clientId}&client_secret=${config.clientSecrect}`,
    );
    if (response.status === 200 && response.statusText === 'OK')
      dispatch({ type: GET_USER, payload: response.data });
    dispatch({ type: SET_LOADING, payload: false });
  };

  const getUserRepos = async (username) => {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await axios.get(
      `${config.apiURI}/users/${username}/repos?client_id=${config.clientId}&client_secret=${config.clientSecrect}`,
    );
    if (response.status === 200 && response.statusText === 'OK') {
      dispatch({ type: GET_USER_REPOS, payload: response.data });
    }
    dispatch({ type: SET_LOADING, payload: false });
  };

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        userRepos: state.userRepos,
        loading: state.loading,
        searchUsers: searchUsers,
        getUser: getUser,
        getUserRepos: getUserRepos,
        alert: state.alert,
        removeAlert: removeAlert,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
