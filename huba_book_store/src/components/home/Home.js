import React, {useState, useEffect} from "react";
import Api, { Api_Url } from "../Global/Api";
import "./Home.css"

function Home(){
      const [books, setBooks] = useState([]);
      const [searchTerm, setSearchTerm] =useState('');
      const onInputChange= (e) =>{
        setSearchTerm(e.target.value);
      }  
    useEffect(()=>{
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
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setBooks()
    }


    return(
        <div className="container">
            <div className="search" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search books...." value={searchTerm} onChange={onInputChange} />
                <div className="btn"><button type="button"><i className="fa fa-search"></i>Search</button></div>        
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