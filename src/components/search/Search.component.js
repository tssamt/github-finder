import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';

export default function Search({ searchUsers }) {
  const [username, setUsername] = useState('');
  const githubContext = useContext(GithubContext);

  const onSearchClick = () => {
    if (username) {
      githubContext.searchUsers(username);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="form-horizontal">
          <div className="form-group">
            <div className="column col-10">
              <input
                name="username"
                className="form-input"
                type="text"
                placeholder="Github user name.."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="column col-2">
              <button
                className="btn btn-primary btn-block"
                onClick={onSearchClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
