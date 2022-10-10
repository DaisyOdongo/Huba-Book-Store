import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return(
        <div className="navbar">
            <h1>Huuba Book Store</h1>
            <NavLink className="nav-link" to="/favourites">Favourites</NavLink>
            <NavLink className="nav-link" to="/bookList">BookList</NavLink>
        </div>
    
    )
}

export default Navbar;