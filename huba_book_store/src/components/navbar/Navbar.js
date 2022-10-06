import React from "react";
import "./Navbar.css";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js";



const Navbar = () =>{
    return(
      <nav class="navbar navbar-dark navbar-expand-md" id="app-navbar">
        <div class="container-fluid"><a class="navbar-brand" href="#"><i class="fa fa-life-ring" id="brand-logo"></i></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Login</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Favorites</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Cart</a></li>
                </ul>
        </div>
        </div>
    </nav>
    )
}

export default Navbar;