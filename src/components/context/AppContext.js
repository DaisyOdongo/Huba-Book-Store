import { createContext, useContext } from "react";
import { useState } from "react";
const AppContext =createContext(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);
    if (context === undefined){
        throw new Error("Must be within the AppContext")
    }
    return context;
};

const AppContextProvider = ({children}) =>{
    const [favourites, setFavourites] =useState([]);

    const addToFavourites =() =>{};{
    const oldFavourites =[...favourites];

    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
};
    
    const removeFromFavourites ={id} ={};

    return(
        <AppContext.Provider
            value={{favourites, addToFavourites, removeFromFavourites}}
        >
            {children}
            </AppContext.Provider>  
    )
};

export default AppContextProvider;