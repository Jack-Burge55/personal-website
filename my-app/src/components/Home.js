import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import booksObject from "../assets/books.json";

const Home = () => {
    const fontList = ["Franklin Gothic Medium", "Courier New", "Gill Sans", "Segoe UI", "Times New Roman", "Trebuchet MS", "Arial", "Cambria", "Georgia"]
    const [counter, setCounter] = useState(0)
    const booksArray = booksObject["Books"]
    const bookAddress = `/book/${booksArray[booksArray.length - 1]["Id"]}`

    const title = document.querySelector(".landingTitle")

    const interval = setTimeout(() => {
        const font = fontList[counter % fontList.length]
        if (title) {
            title.style["font-family"] = font
        }
        setCounter(counter + 1)
        return () => clearInterval(interval)
    }, 500)

    return(
        <>
        <div className='homePage'>
            <div className='homeSection'>
            <h1 className='landingTitle'>Hello!</h1>
            </div>
            <div className='homeSection'>
                <div className='homeQuarter'>
                    <h2 className='title is-3'>Suggested Articles</h2>
                        <Link to="/santorini">
                            <div className='favouritesLink'>
                                Santorini - An analysis of the abstract board game and the creation of a game engine
                            </div>
                        </Link>
                        <Link to="/sudoku">
                            <div className='favouritesLink'>
                            Sudoku Solver - A short exercise in creating a sudoku solver using a backtracking algorithm
                            </div>
                        </Link>
                        <Link to={bookAddress}>
                            <div className='favouritesLink'>
                            The Last Book I Read - A review of the most recent book I've read in the SF Masterworks collection
                            </div>
                        </Link>
                </div>
                <div className='homeQuarter'>
                <div className='homeText'>
                <p>Welcome to my page! My name is Jack Burgess and I'm a software developer, volunteer and Mathematics graduate from the University of Bristol, UK. I've made this website to document different projects and interests I'm working on.</p>
                </div>
                <div className='homeText'>
                <p>Please feel free to explore my website to see the different projects. For details on how to get in touch, or to find out more about me, check out the <a href='/about' className='textLink'>About</a> tab. You can also reach out to me on <a href='https://www.linkedin.com/in/jack-burgess-02665b96/' className='textLink'>LinkedIn</a>.</p>
                </div>
                </div>
            </div>
        
        </div>
        
        </>
    )
}
export default Home;