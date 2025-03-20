import React from 'react';
import styled from 'styled-components';
import image1 from "../../Images/CorporateManBoxingGloves_NB.png";
import image2 from "../../Images/CorporateWomanBoxingGloves_NB.png";

const Image = styled.img`
    height: 25rem;
    width: auto;
    
`

const ImageCont = styled.div`
    display: flex;
    gap: 0px;
    justify-content: flex-end; 
    position: absolute;
    bottom: -11px;
    right: 20px;

`

const Pictures = () => {
    return(
        <ImageCont>
            <Image src={image1} alt="A Man wearing boxing gloves"/>
            <Image src={image2} alt="A Woman wearing boxing gloves"/>

        </ImageCont>
    );
};

export default Pictures; 

