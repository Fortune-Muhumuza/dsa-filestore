import React, { useEffect, useState } from "react";
import "./Notes.scss";
import { firebaseApp } from "../firebase";
import Header from "./Header";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const storageRef = firebaseApp.storage().ref();

  const setFiles = () => {
    const temp = []
    storageRef.listAll().then(function (result) {
      let path = storageRef.fullPath
      result.items.forEach(fileRef => {
        temp.push({ name: fileRef.name, url: "https://firebasestorage.googleapis.com/v0/b/dsawebapp-f3872.appspot.com/o/" + fileRef.name + "?alt=media" })

      });
    }).then(() => {

      // set data in your any state variable for later use
      setNotes(temp)
      console.log("temp is", temp)
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    setFiles();
    //console.log("notes are", notes);
  }, []);

  return (
    <div className="notes">
      <Header />
      <div className="notes__header">
        <h1 class="notes__header--heading-primary">
          <span class="notes__header--heading-primary--main">
            Download notes
          </span>
          <span class="notes__header--heading-primary--sub">
            8 files available
          </span>
        </h1>

        <div className="notes__header--select">
          <label for="course-units" className="label">Course:</label>
          <select name="course unit" className="notes__header--select-input">
            <option value="">Pharmacy</option>
            <option value="">Public Health Dentistry</option>
            <option value="">Environmental health</option>
            <option value="">Medical Radiography</option>
            <option value="">Medical Laboratory Technology</option>
          </select>
        </div>

      </div>

      <div className="notes__main-content">

        <h1>Notes</h1>

        <div className="notes__main-content--cards-container">

          {/* {notes.map((note) => (
            <div className="notes__main-content--cards-container-card">
              <span>{note.name}</span>
              <span><a className="a" href={note.url} download>Download</a></span>
            </div>

          ))} */}
          

          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
          <div className="notes__main-content--cards-container-card">
            <span className="notes__main-content--cards-container-card-name">Digestive system</span>
            <span><a className="download-button" href="#" download>Download</a></span>
          </div>
        </div>


        {/* <table>
          <tr>
            <th>Name</th>
            <th>Course unit</th>
            <th>Download</th>
          </tr>
          {notes.map((note) => (
              <tr>
                <td>{note.name}</td>
                <td>Anatomy</td>
                <td><a className="a" href={note.url} download>Download</a></td>
              </tr>
          ))}
        </table> */}

      </div>
    </div>
  );
};

export default Notes;
