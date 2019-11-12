import React, { useContext } from 'react';
import UserGridItem from './UserGridItem.component';
import Spinner from '../layout/Spinner.component';
import GithubContext from '../../context/github/githubContext';

export default function UsersGrid(props) {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  const renderUser = () => {
    return users && users.length ? (
      <div className="container" style={style}>
        <div className="columns">
          {users.map((user) => (
            <div className="column col-4" style={colStyle} key={user.id}>
              <UserGridItem user={user} />
            </div>
          ))}
        </div>
      </div>
    ) : (
      ''
    );
  };

  return loading ? <Spinner /> : renderUser();
}

const style = {
  marginTop: '15px',
  padding: '15px',
};

const colStyle = {
  marginBottom: '10px',
};
