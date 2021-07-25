import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./Notes.scss";
import Header from "./Header";
import { setFiles } from '../store/reducers/notesSlice';

const Notes = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)
  const notesStatus = useSelector(state => state.notes.status)
  


  useEffect(() => {
    if (notesStatus === 'idle') {
      dispatch(setFiles())
    }
  }, [notesStatus, dispatch])


  let content

  if (notesStatus === 'loading') {
    content = <div className="lds-dual-ring">Loading...</div>
  } else if (notesStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const renderedNotes = notes

    content = renderedNotes.map(note => (
     
        <div className="notes__main-content--cards-container-card">
       
          <span className="notes__main-content--cards-container-card-name">{note.name}</span>
           <span><a className="download-button" href={note.url} download>Download</a></span>
        </div>
    ))
  } else if (notesStatus === 'failed') {
    content = <div>Sorry there was a problem</div>
  }


  return (
    <div className="notes">
      <Header />
      <div className="notes__header">
        <h1 className="notes__header--heading-primary">
          <span className="notes__header--heading-primary--main">
            Download notes
          </span>
          <span className="notes__header--heading-primary--sub">
            {notes.length} files available
          </span>
        </h1>
{/* 
        <div className="notes__header--select">
          <label for="course-units" className="label">Course:</label>
          <select name="course unit" className="notes__header--select-input">
            <option value="">Pharmacy</option>
            <option value="">Public Health Dentistry</option>
            <option value="">Environmental health</option>
            <option value="">Medical Radiography</option>
            <option value="">Medical Laboratory Technology</option>
          </select>
        </div> */}

      </div>

      <div className="notes__main-content">

        <h1>Notes</h1>

        <div className="notes__main-content--cards-container">

          {content}
          

</div>
      </div>
    </div>
  );
};

export default Notes;
