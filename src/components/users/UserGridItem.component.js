import React from 'react';
import { Link } from 'react-router-dom';

export default function UserGridItem(props) {
  const { user } = props;
  return (
    <div className="card" style={style.cardStyle}>
      <div className="card-image">
        <img
          src={user.avatar_url}
          className="img-responsive s-circle"
          alt={user.login}
        />
      </div>
      <div className="card-header">
        <div className="card-title h5">{user.login}</div>
        <div className="card-subtitle text-gray text-center">
          <strong>{user.type}</strong>
        </div>
      </div>
      <div className="card-footer">
        <Link className="btn btn-primary" to={`/user/${user.login}`}>
          More details
        </Link>
      </div>
    </div>
  );
}

const style = {
  cardStyle: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
  },
};
