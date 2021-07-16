import React, { useEffect, useState } from "react";
import "./Notes.css";
import { firebaseApp } from "../firebase";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const storageRef = firebaseApp.storage().ref();

  const showAvailableNotes = async () => {
    // Create a reference under which you want to list
    const listRef = storageRef.child("files");
    const arr = [];

    // Find all the prefixes and items.
    await listRef
      .listAll()
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          //console.log(itemRef)
          arr.push(itemRef.name);
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    console.log("the array iss", arr);

    setNotes(arr);
  };

  useEffect(() => {
    showAvailableNotes();
    console.log("notes are", notes);
  }, []);

  return (
    <div className="notes">
      <div className="notes__header">
        <h1>Download notes</h1>
        <div className="notes__header-select">
          <label for="cars">Course unit:</label>
          <select name="cars" id="cars">
            <option value="volvo">Anatomy</option>
            <option value="saab">Physiology</option>
            <option value="opel">Oral surgery</option>
          </select>
        </div>
      </div>
      <div className="notes__mainContent">
        {notes.map((note) => (
          <p>{note}</p>
        ))}
      </div>
    </div>
  );
};

export default Notes;
