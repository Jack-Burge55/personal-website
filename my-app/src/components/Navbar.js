import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

    return(
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <nav className="topnav" id="myTopnav">
          <ul>
            <li className="icon" onClick={() => {myFunction()}}><i className="fa fa-bars"></i></li>
            <li><Link to="/" onClick={() => {myFunction()}}>Home</Link></li>
            <li><Link to="/books" onClick={() => {myFunction()}}>SF Masterworks</Link></li>
            <li><Link to="/santorini" onClick={() => {myFunction()}}>Santorini</Link></li>
            <li><Link to="/react" onClick={() => {myFunction()}}>React</Link></li>
            <li><Link to="/about" onClick={() => {myFunction()}}>About</Link></li>
          </ul>
        </nav>   
      </>
    )
}
export default Navbar;