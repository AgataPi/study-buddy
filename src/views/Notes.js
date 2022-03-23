import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styles';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = (e) => {
    dispatch(addNote({ title: `New Note ${Math.floor(Math.random() * 10)}`, content: 'Lorem ipsum dolor assddf' }));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first notes</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
