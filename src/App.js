import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import Profile from './Profile';
import EditProfile from './EditProfile';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
      
          <Route exact path="/users" Component={Dashboard}/>
          
          <Route exact path="/create-user" Component={CreateUser} />
          
          <Route exact path='/edit-user/:id' Component={EditUser} />
          
          <Route exact path='/profile/:id' Component={Profile} />
          
          <Route exact path='/edit-profile/:id' Component={EditProfile} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;