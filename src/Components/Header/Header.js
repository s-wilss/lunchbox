import React from "react";
import styled from "styled-components";
import Pictures from  "./Pictures";
import Title from  "./Title";



  const HeaderCont= styled.div`
    display: flex;
    width: 100%;
    position: relative; 
    height: 600px; 

    align-items: center;
    background-image: linear-gradient(to bottom, rgb(19, 51, 29), rgb(57, 95, 40));

    .Title{
    
    }
  `





const Header =() => {
    return(
        <HeaderCont>
            
            <Title/>
            <Pictures/>

        </HeaderCont>
    );
}

export default Header