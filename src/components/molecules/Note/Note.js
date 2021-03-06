import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useRemoveNoteMutation } from 'store/api/notes';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const hadleRemoveNote = () => {
    removeNote({ id: id });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton aria-label="Delete" onClick={hadleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
