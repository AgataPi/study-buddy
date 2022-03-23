import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();

  const hadleRemoveNote = () => {
    dispatch(removeNote({ id: id }));
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={hadleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
