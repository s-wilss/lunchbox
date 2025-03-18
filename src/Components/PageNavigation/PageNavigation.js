import React from "react";
import styled from 'styled-components'
import NavigationLinks from "./NavigationLinks";
import SearchBar from "./SearchBar";
import SocialMediaLinks from "./SocialMediaLinks";

 /* Style for navigation list*/
 const NavigationCont = styled.div`
    display: flex;
    gap:50px;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content:space-evenly;
    font-family: 'Host Grotesk', sans-serif;
    `
     
  


const PageNavigation = () =>{
 
    return(
        
        <div className="PageNavigation">
            <h2>Page Navigation</h2>
            <NavigationLinks/>
            <SearchBar/>
            <SocialMediaLinks/>\
    
        </div>
    );
}

export default PageNavigation;