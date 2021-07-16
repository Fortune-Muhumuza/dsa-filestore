import React from 'react'
import './App.css'
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

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <Switch>
          <Route path='/notes'>
            <Notes />
          </Route>
          <Route path='/admin2000'>
            <Admin />
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
