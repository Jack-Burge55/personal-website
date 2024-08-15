import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CSS from "csstype"

import booksObject from "../assets/books.json"

const Home = () => {
    const fontList = ["Franklin Gothic Medium", "Courier New", "Gill Sans", "Segoe UI", "Times New Roman", "Trebuchet MS", "Arial", "Cambria", "Georgia"]
    const [counter, setCounter] = useState(0)
    const booksArray = booksObject["Books"]
    const bookAddress = `/book/${booksArray[booksArray.length - 1]["Id"]}`

    let titleStyles: CSS.Properties = {
        fontFamily: fontList[counter]
    }

    const interval = setTimeout(() => {        
        setCounter((counter + 1) % fontList.length)
        return () => clearInterval(interval)
    }, 500)    

    return(
        <>
        <div className='homePage'>
            <div className='homeSection'>
            <h1 className='landingTitle' style={titleStyles}>Hello!</h1>
            </div>
            <div className='homeSection'>
                <div className='homeQuarter'>
                    <div className='homeText'>
                        <p>Welcome to my page! My name is Jack Burgess and I'm a software developer, volunteer and Mathematics graduate from the University of Bristol, UK. I've made this website to document different projects and interests I'm working on.</p>
                    </div>
                    <div className='homeText'>
                        <p>Please feel free to explore my website to see the different projects. For details on how to get in touch, or to find out more about me, check out the <a href='/about' className='textLink'>About</a> tab. You can also reach out to me on <a href='https://www.linkedin.com/in/jack-burgess-02665b96/' className='textLink'>LinkedIn</a>.</p>
                    </div>
                </div>
                <div className='homeQuarter'>
                    <h2 className='title is-3'>Suggested Pages</h2>
                        <div className='favourites'>
                            <Link to="/play-santorini">
                                <div className='favouritesLink'>
                                    🏛️ A Santorini Engine - Play against my created engine for my favourite board game, Santorini
                                </div>
                            </Link>
                        </div>
                        <div className='favourites'>
                            <Link to="/farmazon">
                                <div className='favouritesLink'>
                                    🐮 Farmazon - An exercise into creating an Amazon clone, with both front and back-end
                                </div>
                            </Link>
                        </div>
                        <div className='favourites'>
                            <Link to={bookAddress}>
                                <div className='favouritesLink'>
                                    📖 The Last Book I Read - A review of the most recent book I've read in the SF Masterworks collection
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;