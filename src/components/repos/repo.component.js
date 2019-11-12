import React, { Fragment } from 'react';

export default function Repo({ repo }) {
  return (
    <Fragment key={repo.id}>
      <div className="repo-item">
        <h4>
          <a href={repo.html_url}>{repo.full_name}</a>
        </h4>
        <p>{repo.description}</p>
      </div>
      <div className="divider"></div>
    </Fragment>
  );
}
