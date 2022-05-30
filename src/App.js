import React from 'react';
import './App.css';
import SignIn from './Pages/SignIn';
import Welcome from './Pages/Welcome';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import Test from './Pages/test';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Welcome/" element={<Welcome/>} />
          <Route path="/Welcome/Products" element={<Products/>} />
          <Route path="/Welcome/Orders" element={<Orders/>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <SignIn />
);