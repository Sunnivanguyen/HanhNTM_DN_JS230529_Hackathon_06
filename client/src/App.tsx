import NewNote from "./components/NewNotes";
import Notes from "./components/Notes";

import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Header from "./components/Header";
// import React from "react";

const BaseURL = "http://localhost:7000";

// interface Note {
//   id: number;
//   text: string;
//   isDone: boolean;
// }
export default function App() {
  const [notes, setNotes] = useState([]);

  function getAllNotes() {
    axios
      .get(`${BaseURL}/api/v1/notes/`)
      .then((res) => setNotes(res.data.data.notes))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllNotes();
  }, []);

  const addNewNoteHandler = (todoText: string) => {
    axios
      .post(`${BaseURL}/api/v1/notes/`, { text: todoText, isDone: 1 })
      .then((_) => {
        // console.log(res.data.data.newNote);
        // setNotes((prevNotes) => {
        //   return prevNotes.concat(res.data.data.newNote);
        // });
        getAllNotes();
      });
  };

  // const handleCheckDone = (todoId: number, checked: boolean) => {
  //   axios.put(`/api/v1/notes/${todoId}`);
  // };

  const removeNoteHandler = (noteId: number) => {
    axios
      .delete(`${BaseURL}/api/v1/notes/${noteId}`)
      .then((_) => getAllNotes());
    // .then((_) =>
    //   axios
    //     .get(`${BaseURL}/api/v1/notes/`)
    //     .then((res) => setNotes(res.data.data.notes))
    //     .catch((err) => console.log(err))
    // );
  };

  return (
    <div>
      <Header />
      <NewNote onAddNote={addNewNoteHandler} />
      <Notes items={notes} onRemoveNote={removeNoteHandler} />
    </div>
  );
}
