import React from "react";
import CopyrightStatement from "./CopyrightStatement";
import styled from "styled-components";

//Styling for the footer container
const FullCont = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, rgb(12, 20, 1), rgb(0, 0, 0));
    width: 100%;
    height: 200px; 
    justify-content: space-between;
    align-items: center;
   
`

//Returns the copyright statement component
const Footer =() => {
    return(
        <FullCont>
            <CopyrightStatement/>
        </FullCont>
    );
}

export default Footer;
