import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
   const [isContent , setIsContent] = useState(false)



   useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/content/getContent', { // Making GET request to the backend API
            headers: {
                "Authorization": localStorage.getItem("token") // Including the token from localStorage for authentication
            }
        })
            .then((response) => {
                // If the request is successful, update the contents state with the fetched data
                console.log(response)
                if(response.data.success){
                setContent(()=>response.data.response)
                setIsContent(()=>true)

                }else{
                    setIsContent(false)
                }
            })
            .catch((error) => {
                // Handle any error that occurs during the request (optional)
                console.error("Error fetching content:", error);
            });

            console.log("Content side Effects")
   },[refreshTrigger])

    const refreshContent = () => {
    setRefreshTrigger((prev) => prev + 1);
  };



  return (
    <ContentContext.Provider value={{ content, refreshContent , isContent}}>
      {children}
    </ContentContext.Provider>
  );
};



