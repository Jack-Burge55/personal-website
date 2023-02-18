import { useState, useEffect } from 'react';
import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import Books from './components/Books';
import About from "./components/About";


function App() {
  // const [testState, setTestState] = useState(0)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTestState(testState + 1);
  //   }, 1000);
  // }, [testState]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />
      </Routes>
    </div>
  );
}

export default App;
