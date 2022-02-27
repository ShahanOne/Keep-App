import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  const [isClicked, setClick] = useState(false);
  function click() {
    setClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={click}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
        />
        <button className="add-btn" onClick={(event)=>{
          props.add(note);
          setNote({
            title:"",
            content:""
          })
          event.preventDefault();
        }}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
