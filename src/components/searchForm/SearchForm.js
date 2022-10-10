import React, {useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useGlobalContext} from '../context/Context'

function SearchForm(){

    const [setResultTitle, setSearchTerm] =useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Search book ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

    return(
        <div className="search">
            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="Search books...." />
                <div className="btn"><button type="button"><i className="fa fa-search" onClick={handleSubmit}></i>Search</button></div>       
            </form>
               
            </div> 
    )
}
export default SearchForm;