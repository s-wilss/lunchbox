import React from 'react';
import styled from 'styled-components';
import logoImage from "../../Images/LogoNB.png";

//Styling for the text part of the logo
const LogoCont = styled.div`
    font-size: 130px;
    margin: 0;
    font-family: 'Trade Winds', serif ;
`

//Styling for the image part of the logo
const LogoImage = styled.img`
    height: 30rem;
    width: auto;
`

//Styling for the entire container
const TitleCont = styled.div`
    display: flex;
    align-items: center;
    gap: 0px;
    padding-left: 50px;  
    padding-top: 90px;  
`
//Returns the logo text and logo image parts
const Title = () => {
    return(
        <TitleCont>
            <LogoCont>Lunchbox</LogoCont>
            <LogoImage src={logoImage} alt="The Lunchbox Logo"/>
        </TitleCont>
    );
};

export default Title; 