import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Admin from './components/Admin'
import Notes from './components/Notes'
import CourseOutline from './components/CourseOutline'

const App = () => {
  return (
    <Router>
      <div className="container"> 
      
     
        <div className="content">
        <Sidebar />
         
          <Switch>
          <Route path='/notes'>
            <Notes />
          </Route>
          {/* <Header /> */}
          <Route path='/admin2000'>
            <Admin />
          </Route>
          <Route path='/courseOutline'>
            <CourseOutline />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
