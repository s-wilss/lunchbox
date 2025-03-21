import React from 'react';
import styled from 'styled-components';
import logoImage from "../../Images/LogoNB.png";

const LogoCont = styled.div`
    font-size: 130px;
    margin: 0;
    font-family: 'Trade Winds', serif ;

`
const LogoImage = styled.img`
    height: 30rem;
    width: auto;
`
const TitleCont = styled.div`
    display: flex;
    align-items: center;
    gap: 0px;
    padding-left: 50px;  
    padding-top: 90px;  
`

const Title = () => {
    return(
        <TitleCont>
            <LogoCont>Lunchbox</LogoCont>
            <LogoImage src={logoImage} alt="The Lunchbox Logo"/>
        </TitleCont>
    );
};

export default Title; 