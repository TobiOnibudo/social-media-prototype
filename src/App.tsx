import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import {Main} from "./pages/main";
import {Login} from "./pages/Login";
import { NavBar } from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<Main />}>  </Route>
          <Route path='/login' element ={<Login />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
