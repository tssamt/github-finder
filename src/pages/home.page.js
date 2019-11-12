import React, { Fragment } from 'react';

import Alert from '../components/layout/Alert.component';
import Search from '../components/search/Search.component';
import UsersGrid from '../components/users/UsersGrid.component';

export default function Home(props) {
  return (
    <Fragment>
      <Alert alert={props.alert} setAlert={() => props.setAlert} />
      <Search searchUsers={props.searchUsers} />
      <UsersGrid users={props.users} loading={props.loading} />
    </Fragment>
  );
}
