import React, {useState, useEffect} from "react";
import Api, { Api_Url } from "../Global/Api";
import "./Home.css"

function Home(){
      const [books, setBooks] = useState([])

    useEffect(()=>{
        // e.PreventDefault()
        fetch(Api_Url)
        .then((responce)=>responce.json())
        .then((data)=>setBooks(data))
        .catch((error) =>console.log(error));
    },[])
    console.log(books)
    const arrange = {
        width: "100%",
        maxWidth: "1240px",
        margin: "0 auto",
        paddingTop: "100px",
         
        display: "grid",
         
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridGap: "20px",
    };

    return(
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search books...." />
                <div className="btn"><button className="btn btn-outline-warning btn-lg" type="button"><i className="fa fa-search"></i></button></div>        
            </div>   
            <div className="booklist" style={arrange}>
                {books.map((book) =>(
                    <div key={book.id}>
                        <div><h2>{book.title}</h2></div>
                        <div><h3>{book.authors}</h3></div>
                        <div><img src={book.image_url} alt="#"></img></div>
                    </div> 
                 ))}
            </div>
        </div>
    )
}
export default Home;