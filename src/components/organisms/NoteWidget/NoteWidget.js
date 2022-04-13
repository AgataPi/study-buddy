import Note from 'components/molecules/Note/Note';
import React, { useState } from 'react';
import { useGetNotesQuery } from 'store';
import { Wrapper, WidgetHandler, NotesWrapper } from './NoteWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <h3>Loading ...</h3>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => <Note id={id} key={id} title={title} content={content} />)
          ) : (
            <p>Create your first notes</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
