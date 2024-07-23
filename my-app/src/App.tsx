import React from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import Books from './components/Books';
import ReactPage from './components/ReactPage';
import Sudoku from "./components/Sudoku";
import Farmazon from "./components/Farmazon";
import About from "./components/About";
import Projects from "./components/Projects"
import BookPage from './components/BookPage';
import SantoriniPage from "./components/SantoriniPage";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookPage/>} />
        <Route path="/books" element={<Books />} />
        <Route path="/santorini" element={<SantoriniPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/farmazon" element={<Farmazon />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />
      </Routes>
    </div>
  );
}

export default App;
