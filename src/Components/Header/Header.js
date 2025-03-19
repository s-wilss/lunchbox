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
    background-image: linear-gradient(to left, rgb(57, 95, 40), rgb(19, 51, 29));
  `


const Header =() => {
    return(
        <HeaderCont>
            <h2>Header</h2>
            <Title/>
            <Pictures/>

        </HeaderCont>
    );
}

export default Header