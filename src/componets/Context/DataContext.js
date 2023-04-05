import { createContext,useState,useEffect } from "react";
import axios from "axios";

 export const dataContext= createContext();

const DataProvider= ({children})=> {
    const [data,setData]=useState([]);

    useEffect(()=>{
axios("./data.json").then((res)=> setData(res.data));
    },[]);
   console.log(data)
    return(
        <dataContext.Provider value={{data}}>{children}</dataContext.Provider>
       
        );
};


export default DataProvider;