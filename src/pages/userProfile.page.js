import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Spinner from '../components/layout/Spinner.component';
import Repo from '../components/repos/repo.component';

class UserProfile extends Component {
  componentDidMount() {
    const { login } = this.props.match.params;
    if (login) {
      this.props.getUser(login);
      this.props.getUserRepos(login);
    }
  }
  render() {
    const { loading, user, history, repos } = this.props;
    return loading ? (
      <Spinner />
    ) : (
      <div className="container grid-lg" style={styles.container}>
        <div className="columns">
          <div className="column col-12">
            <button className="btn" onClick={history.goBack}>
              <i className="icon icon-arrow-left"></i> Back
            </button>
          </div>
          <div className="column col-12">
            <div className="bg-gray p-2 s-rounded">
              <div className="columns">
                <div className="column col-6 text-center">
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="s-circle"
                    style={{ width: '220px', height: '220px' }}
                  />
                  <h3>{user.name}</h3>
                  <p>Location : {user.location}</p>
                </div>
                <div className="column col-6">
                  <h4>Bio</h4>
                  <p>{user.bio}</p>
                  <ul>
                    <li>
                      <strong>
                        Hirable:{' '}
                        <i
                          className={`icon icon-${
                            user.hireable ? 'check' : 'cross'
                          }`}
                        ></i>
                      </strong>
                    </li>
                    <li>
                      <strong>Company: {user.company}</strong>
                    </li>
                    <li>
                      <strong>Blog: {user.blog}</strong>
                    </li>
                  </ul>
                  <a className="btn btn-sm" href={user.html_url}>
                    Github profile
                  </a>
                </div>
                <div className="column col-12 d-flex" style={styles.stats}>
                  <span className="label label-primary">
                    <strong>Followers : {user.followers}</strong>
                  </span>
                  <span className="label label-secondary">
                    <strong>Following : {user.following}</strong>
                  </span>
                  <span className="label label-success">
                    <strong>Public repos : {user.public_repos}</strong>
                  </span>
                  <span className="label label-error">
                    <strong>Github Gists : {user.public_gists}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="column col-12">
            <div className="divider"></div>
            {(repos || []).map((repo) => (
              <Repo repo={repo} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '15px',
  },
  stats: {
    justifyContent: 'space-around',
  },
};

export default withRouter(UserProfile);
