import React, { useEffect, useState } from "react";
import "./Show.css";
import HomeButton from "../../component/HomeButton/HomeButton";
import NoteCard from "../../component/NoteCard/NoteCard";

function Show() {
  const [notes, setNotes] = useState([]);

  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    setNotes(savedNotes);
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">📖Show Notes</h1>
      {
        notes.map((note,index)=>{
          const {title, description, category, emoji} = note;

          return(
            <div>
              <NoteCard
              title={title}
              description={description}
              category={category}
              emoji={emoji}
              onDelete={() => handleDelete(index)}/>
              
            </div>
          )
        })
      }
      <HomeButton />
    </div>
  );
}

export default Show;
