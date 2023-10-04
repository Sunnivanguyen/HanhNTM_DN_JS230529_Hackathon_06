import React, { useRef } from "react";

const NewNote: React.FC<{ onAddNote: (text: string) => void }> = (props) => {
  const noteTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(event.nativeEvent);

    const eneteredText = noteTextInputRef.current!.value;

    if (eneteredText.trim().length === 0) {
      return;
    }

    props.onAddNote(eneteredText);
  };

  return (
    <form
      style={{ width: "40rem", margin: "2rem auto" }}
      onSubmit={submitHandler}
    >
      <label
        style={{
          display: "block",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.5rem",
        }}
        htmlFor="text"
      >
        Note
      </label>
      <input
        style={{
          display: "block",
          width: "100%",
          font: "inherit",
          fontSize: "1.2rem",
          padding: "0.75rem",
          borderRadius: "4px",
          backgroundColor: "#f7f5ef",
          border: "none",
          borderBottom: "2px solid #494844",
          borderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
          marginBottom: "0.5rem",
        }}
        type="text"
        id="text"
        ref={noteTextInputRef}
      />
      <button
        style={{
          font: "inherit",
          backgroundColor: "#ebb002",
          border: "1px solid #ebb002",
          color: "#201d0f",
          padding: " 0.5rem 1.5rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add New Note
      </button>
    </form>
  );
};

export default NewNote;
