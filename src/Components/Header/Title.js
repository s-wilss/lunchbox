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

const Title = () => {
    return(
        <div>
            <LogoCont>Lunchbox</LogoCont>
            <LogoImage src={logoImage} alt="The Lunchbox Logo"/>
        </div>
    );
};

export default Title; 