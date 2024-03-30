import React from "react";
import logo2 from '../logos/logo2.png'
import '../styles/Navbar.css'

 const Navbar = ()=>{

    return(

        <div className="container bg-black">
          <img className="logo2" src={logo2} alt="logo" />
          <div className="search">
            <input className="search-input" placeholder="Search here ..." type="text" />
            <button className="search-button">Go</button>
          </div>
        </div>
    )
}

export default Navbar;