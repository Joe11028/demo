import React from 'react';
import './App.css';
import SignIn from './Pages/SignIn';
import Welcome from './Pages/Welcome';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Welcome" element={<Welcome/>} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <SignIn />
);