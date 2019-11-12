import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_USER_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case GET_USER:
      return { ...state, user: action.payload };

    case GET_USER_REPOS:
      return { ...state, userRepos: action.payload };

    case SET_ALERT:
      return { ...state, alert: action.payload };

    case REMOVE_ALERT:
      return { ...state, alert: {} };

    default:
      return { ...state };
  }
};
