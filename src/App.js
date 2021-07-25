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
import Timetables from './components/Timetables';
import Login from './components/Login'
import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth.isLoggedIn;

  return (
    <Router>
      {!isLoggedIn? <Login /> : 
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
          <Route path='/timetables'>
            <Timetables />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          </Switch>
        </div>
      </div>
}
    </Router>
      
  )
}

export default App
