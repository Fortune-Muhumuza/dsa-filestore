import React from 'react'
import './CourseOutline.scss'
import Header from './Header'

const CourseOutline = () => {
    return (
        <div className="course">
            <Header />
            <div className="course__content">
                <h1>Course outline</h1>
                <div className="notes__header--select course-outline-year-select">
                    <label for="course-units" className="label">Year:</label>
                    <select name="course unit" className="notes__header--select-input">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>

                <div className="course--cards-container">
                    <div className="home__content--card courseOutline-card">
                        <h1 className="home__content--card-heading courseOutline-h1">
                            Dental Public Health III
                        </h1>
                        <ul className="card-list">
                            <li>Principles of oral health promotion</li>
                            <li>Oral health education</li>
                            <li>Principles and theories of behavioral change for oral health</li>
                            <li>Prevention of periodontal diseases</li>
                            <li>Prevention of caries</li>
                            <li>Oral cancer prevention</li>
                            <li>Prevention of traumatic dental injuries</li>
                        </ul>

                    </div>

                    <div className="home__content--card courseOutline-card">
                        <h1 className="home__content--card-heading courseOutline-h1">
                            Oral surgery III
                        </h1>
                        <ul className="card-list">
                            <li>Oral lesions</li>
                            <li>Oral medicine and pathology</li>
                            <li>Vascular conditions</li>
                            <li>Systemic manifestations of oral diseases and oral manifestation of systemic diseases</li>
                            <li>Oral pain syndrome</li>
                            <li>Halitosis</li>
                            <li>Immune mediated lesions</li>
                            <li>Oral facial trauma</li>
                            <li>Teeth injuries</li>
                            <li>Jaw injuries</li>
                            <li>Soft tissue injuries</li>
                            <li>Dental emergencies</li>
                        </ul>

                    </div>

                    <div className="home__content--card courseOutline-card">
                        <h1 className="home__content--card-heading courseOutline-h1">
                            Prosthetics and Orthodontics
                        </h1>
                        <ul className="card-list">
                            <li>Introduction to orthodontic treatment</li>
                            <li>Types of appliances</li>
                            <li>Crowns</li>
                            <li> Bridges</li>
                            <li>Braces</li>
                            <li>Dentures</li>
                            <li>Indications for appliances</li>
                            <li>Kendely’s classification of edentulous arches</li>
                            <li>Intra-oral impressions</li>

                        </ul>

                    </div>

                    <div className="home__content--card courseOutline-card">
                        <h1 className="home__content--card-heading courseOutline-h1">
                            Operative Dentistry III
                        </h1>
                        <ul className="card-list">

                            	<li>Dental Materials – composite and GI</li>
                            	<li>Endodontic Treatment- introduction, instruments and materials</li>
                            	<li>Introduction to endodontics.</li>
                            	<li>Dental materials in endodontics</li>
                            	<li>Classification of dental materials in endodontics</li>
                            	<li>Pathological changes of the pulp.</li>
                            	<li>Diagnosis and management of pulpitis of anterior teeth (RCT of single canal teeth</li>
                            	<li>Clinical Training</li>


                        </ul>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default CourseOutline
