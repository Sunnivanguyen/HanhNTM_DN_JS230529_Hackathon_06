import React from "react";

import NoteItem from "./NoteItem";

interface Note {
  id: number;
  text: string;
  isDone: boolean;
}

const Notes: React.FC<{ items: Note[]; onRemoveNote: (id: number) => void }> = (
  props
) => {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: "2rem auto",
        padding: 0,
        width: "40rem",
      }}
    >
      {props.items.map((item) => (
        <NoteItem
          key={item.id}
          text={item.text}
          id={item.id}
          isDone={item.isDone}
          onRemoveNote={props.onRemoveNote.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Notes;
