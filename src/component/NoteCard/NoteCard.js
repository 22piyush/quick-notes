import React from "react";
import "./NoteCard.css";

function NoteCard({ title, description, category, emoji, onDelete }) {
  return (
    <div className="note-card">
      <div className="useflex">
        <div>
          <div className="note-card-emoji margin">{emoji}</div>

          <h3 className="note-card-title margin">{title}</h3>
          <p className="note-card-description margin">{description}</p>
          <span className="note-card-category margin">{category}</span>
        </div>
        <div className="button-card">
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
