import React from "react";
import Api, { Api_Url } from "../Global/Api";
import "./Home.css"

function Home(){
    
    return(
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search books...." />
                <div className="btn"><button type="button"><i className="fa fa-search"></i>Search</button></div>        
            </div>   
        </div>
    )
}
export default Home;