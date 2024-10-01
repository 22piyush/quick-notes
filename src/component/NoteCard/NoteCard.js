import React from "react";
import "./NoteCard.css";

function NoteCard({ title, description, category, emoji, onDelete}) {
  return (
    <div className="note-card">
      <div className="note-card-emoji">{emoji}</div>
      <div>
        <h3 className="note-card-title">{title}</h3>
        <p className="note-card-description">{description}</p>
        <span className="note-card-category">{category}</span>
        <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
      </div>
    </div>
  );
}

export default NoteCard;
