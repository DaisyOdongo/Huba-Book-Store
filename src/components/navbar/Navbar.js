import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return(
        <div className="navbar">
            <h1>Huuba Book Store</h1>
            <NavLink className="nav-link" to="/bookList">BookList</NavLink>
            <NavLink className="nav-link" to="/book/:id">BookDetails</NavLink>

        </div>
    
    )
}

export default Navbar;