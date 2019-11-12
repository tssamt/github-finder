import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

function Alert() {
  const githubContext = useContext(GithubContext);
  const { alert, removeAlert } = githubContext;
  const { type, message } = alert;
  console.log(alert);
  return message ? (
    <div className="container">
      <div className="columns">
        <div className="column col-12">
          <div className={`toast toast-${type}`}>
            <button
              className="btn btn-clear float-right"
              onClick={() => removeAlert()}
            ></button>
            {message}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

Alert.defaultProps = {
  type: 'primary',
};

export default Alert;
