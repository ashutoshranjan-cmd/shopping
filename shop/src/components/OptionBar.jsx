import React from "react";
import '../styles/OptionBar.css'
import {Link, NavLink} from "react-router-dom"

const OptionBar = ()=>{

    return (
        <div className="option">

            <nav>
                <ul>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/electronics"}>Electronics</NavLink></li>
                    <li><NavLink to={"/wires"} >Wires </NavLink></li>
                    <li><NavLink to={"/about"} >About</NavLink></li>
                    <li><NavLink to={"/contacts"} >Contacts</NavLink></li>
                    <li><NavLink to={"/feedbacks"} >Feedbacks</NavLink></li>
                    <li><NavLink to={"/forms"} >Signup</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}

export default OptionBar;