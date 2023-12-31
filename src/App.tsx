import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import {Main} from "./main/main";
import {Login} from "./pages/Login";
import { NavBar } from './Components/navbar';
import { CreatePost } from './pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<Main />}>  </Route>
          <Route path='/login' element ={<Login />} ></Route>
          <Route path="/createpost" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
