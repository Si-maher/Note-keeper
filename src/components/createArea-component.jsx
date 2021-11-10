import React, { useState } from "react";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        ></input>
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note.."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>
     add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
