import Note from 'components/molecules/Note/Note';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, WidgetHandler, NotesWrapper } from './NoteWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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

export default NotesWidget;
