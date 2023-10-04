import React from "react";
import { Edit } from "./Edit";
const NoteItem: React.FC<{
  id: number;
  text: string;
  isDone: boolean;
  onRemoveNote: (id: number) => void;
}> = ({ id, text, isDone, onRemoveNote }) => {
  return (
    <li
      style={{
        margin: "1rem 0",
        boxShadow: "0 1px 4px rgb(0, 0, 0, 0.2)",
        padding: "1rem 1.5rem",
        backgroundColor: "#f7f5ef",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h3>{text}</h3>
      <div
        style={{
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          type="checkbox"
          style={{ height: "20px", width: "20px", accentColor: "#ebb002" }}
          value={`${isDone}`}
          onChange={(e) => console.log("ok")}
        ></input>
        <Edit />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            color: "#ebb002",
            cursor: "pointer",
          }}
          onClick={() => onRemoveNote(id)}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 9l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3m-3 12a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
          />
        </svg>
      </div>
    </li>
  );
};

export default NoteItem;
