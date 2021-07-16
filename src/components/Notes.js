import React from 'react'
import './Notes.css'

const Notes = () => {
    return (
        <div className='notes'>
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

        </div>
    )
}

export default Notes
