import { useState, useEffect } from 'react';
import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import { Link } from "react-router-dom";


function App() {
  const [testState, setTestState] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTestState(testState + 1);
    }, 1000);
  }, [testState]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />
      </Routes>
      <h1>Welcome to my page</h1>
      <h2>You've been here for {testState} seconds</h2>
    </div>
  );
}

export default App;
