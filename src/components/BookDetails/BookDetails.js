import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { Api_Url } from "../Global/Api";

function BooKDetails(){
    const {id} =useParams
    console.log(id)

    const [books, getBooks] =useState([]);

    const book ={}

    useEffect(() =>{
        fetch(Api_Url)
        .then((responce)=>responce.json())
        .then((books)=>console.log(books))
        .catch((error) =>console.log(error));
    },[id])
    getBooks();

    console.log(books)
    
    return(
        <div>
            <div key={book.id}>
                        <div><h2>{book.title}</h2></div>
                        <div><h3>{book.authors}</h3></div>
                        <div><img src={book.image_url} alt="#"></img></div>
                        <div><p>{book.description}</p></div>
                        <div><p>{book.genre}</p></div>


                    </div> 
        </div>
    )
}
export default BooKDetails;