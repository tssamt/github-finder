import React from 'react';
import PropTypes from 'prop-types';
import HocExp from '../../HOC/withExp.hoc';

function Alert({ alert, setAlert }) {
  const { type, message } = alert;
  return alert.message ? (
    <div className="container">
      <div className="columns">
        <div className="column col-12">
          <div className={`toast toast-${type}`}>
            <button
              className="btn btn-clear float-right"
              onClick={setAlert()}
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

export default HocExp(Alert);
