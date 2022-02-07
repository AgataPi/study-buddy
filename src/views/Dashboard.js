import React from 'react';
// import PropTypes from 'prop-types';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = ({ deleteUser, users }) => {
  return (
    <ViewWrapper>
      <UsersList deleteUser={deleteUser} users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
