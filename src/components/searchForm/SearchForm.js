// import React, {useState, useEffect} from "react";
// import {Api_Url} from './Global/Api';
// import {useParams } from "react-router-dom";

// function SearchForm(){

//     const [books, setBooks] = useState();
//     const [filteredBooks, setFilteredBooks] = useState([]);
//     const {id} =useParams
    

//      useEffect(()=>{
//         fetch(`Api_Url`, id)
//         .then((responce)=>responce.json())
//         .then((response)=>setBooks(response.hints))
//         .catch((error) =>console.log(error));
//     },[id]);

//     function handleOnChange(search){
//      setFilteredBooks(search.key)
//     }

//     function handleClick(event){
//         event.preventDefault();
//         setFilteredBooks(filteredBooks)
//     }

//     return(
//         <div className="search">
//             <form onSubmit={handleClick}>
//                  <input type="text" placeholder="Search books...." />
//                 <div className="btn"><button type="button"><i className="fa fa-search" onChange={handleOnChange}></i>Search</button></div>       
//             </form>
               
//             </div> 
//     )
// }
// export default SearchForm;