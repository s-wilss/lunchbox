import React from "react";
import styled from 'styled-components'
import NavigationLinks from "./NavigationLinks";
import SearchBar from "./SearchBar";
import SocialMediaLinks from "./SocialMediaLinks";

 /* Style for navigation list*/
 const NavigationCont = styled.div`
    display: flex;
    height: 65px;
    background-image: linear-gradient(to bottom, rgb(69, 131, 55), rgb(49, 105, 67));
    font-family: 'Host Grotesk', sans-serif;
    color:rgb(255, 255, 255) ;
    font-size: 20px;
    transition: color 0.3s ease;
    justify-content: space-between;
    `
 

const HalfCont = styled.div`
    display: flex;
    justify-content: space-between;
    `




const PageNavigation = () =>{
 
    return(
        
        <div>
            <NavigationCont>
                <HalfCont>
                    <SearchBar/>
                    <NavigationLinks/>
                </HalfCont>
                <SocialMediaLinks/>
            </NavigationCont>
    
        </div>
    );
}

export default PageNavigation;