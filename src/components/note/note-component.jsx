import React from "react";
import "./note-styles.css";

const Note = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
