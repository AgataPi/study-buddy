import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from './StudentsListItem.styles';
import { UsersContext } from 'providers/UsersProvider';
import { Average } from 'components/atoms/Average/Average';
import { UserShape } from 'types';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
