import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import Books from './components/Books';
import ReactPage from './components/ReactPage';
import About from "./components/About";
import BookPage from './components/BookPage';
import SantoriniPage from "./components/SantoriniPage";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookPage bookId/>} />
        <Route path="/books" element={<Books />} />
        <Route path="/santorini" element={<SantoriniPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />
      </Routes>
    </div>
  );
}

export default App;
