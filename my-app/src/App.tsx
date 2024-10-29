import React from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import Books from './components/Books';
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import ReactPage from './components/ReactPage';
import Sudoku from "./components/Sudoku";
import Farmazon from "./components/Farmazon";
import About from "./components/About";
import Projects from "./components/Projects"
import BookPage from './components/BookPage';
import SantoriniPage from "./components/SantoriniPage";
// @ts-ignore
import PlaySantorini from "./components/PlaySantorini/PlaySantorini"
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookPage/>} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/santorini" element={<SantoriniPage />} />
        <Route path="/play-santorini" element={<PlaySantorini />} />
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
