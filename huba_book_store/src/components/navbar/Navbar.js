import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    return(
        <div className="navbar">
            <h1>Huuba Book Store</h1>
            <NavLink className="nav-link" to="/components/products/prd.js">Favourites</NavLink>
            <NavLink className="nav-link" to="/components/products/prd.js">BookList</NavLink>
        </div>
    )
}

export default Navbar;