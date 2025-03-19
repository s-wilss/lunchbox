import React from 'react';
import styled from 'styled-components';
import image1 from "../../Images/CorporateManBoxingGloves_NB.png";
import image2 from "../../Images/CorporateWomanBoxingGloves_NB.png";

const ImageCont = styled.img`
    height: 25rem;
    width: auto;
`

const Pictures = () => {
    return(
        <>
            <ImageCont src={image1} alt="A Man wearing boxing gloves"/>
            <ImageCont src={image2} alt="A Woman wearing boxing gloves"/>

        </>
    );
};

export default Pictures; 

