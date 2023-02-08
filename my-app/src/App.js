import { useState, useEffect } from 'react';
import Switch from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [testState, setTestState] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTestState(testState + 1);
    }, 1000);
  }, [testState]);
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />
      </Switch>
      <h1>Welcome to my page</h1>
      <h2>You've been here for {testState} seconds</h2>
    </div>
  );
}

export default App;
