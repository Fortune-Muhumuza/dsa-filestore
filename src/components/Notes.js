import React, { useEffect, useState } from "react";
import "./Notes.css";
import { firebaseApp } from "../firebase";
import Header from "./Header";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const storageRef = firebaseApp.storage().ref();

  const showAvailableNotes = () => {
    // Create a reference under which you want to list
    const listRef = storageRef.child("files");
    const arr = [];

    // Find all the prefixes and items.
    listRef
      .listAll()
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          //console.log(itemRef)
          itemRef.getDownloadURL().then((url) => {
           arr.push({name:itemRef.name, url:url});
         // console.log(url)
          })
          //
        });
        setNotes(arr);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    //console.log("the array iss", arr);


  };

  useEffect(() => {
    showAvailableNotes();
    //console.log("notes are", notes);
  }, []);

  return (
    <div className="notes">
      <Header />
      <div className="notes__header">
        <h1>Download notes</h1>
        <div className="notes__header-select">
          <label for="course-units" className="label">Course unit:</label>
          <select name="course unit" className="select">
            <option value="">Anatomy</option>
            <option value="">Physiology</option>
            <option value="">Oral surgery</option>
          </select>
        </div>
      </div>
      <div className="notes__mainContent">

        <table>
        <tr>
                <th>Name</th>
                <th>Course unit</th>
                <th>Date uploaded</th>
              </tr>
          {notes.map((note) => (
              <tr>
                <td>{note}</td>
                <td>Anatomy</td>
                <td>20/4/2021</td>
              </tr>
          ))}
        </table>

      </div>
    </div>
  );
};

export default Notes;
