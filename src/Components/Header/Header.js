import React from "react";
import styled from "styled-components";
import Pictures from  "./Pictures";
import Title from  "./Title";

  //Styling for the main header container
  const HeaderCont= styled.div`
    display: flex;
    width: 100%;
    position: relative; 
    height: 600px; 
    align-items: center;
    background-image: linear-gradient(to bottom, rgb(185, 130, 59), rgb(57, 95, 40));
    
  `

//Return the Title and Pictures component
const Header =() => {
    return(
        <HeaderCont>
            
            <Title/>
            <Pictures/>

        </HeaderCont>
    );
}

export default Header