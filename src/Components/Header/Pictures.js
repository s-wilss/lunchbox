import React from 'react';
import styled from 'styled-components';
import image1 from "../../Images/CorporateManBoxingGloves_NB.png";
import image2 from "../../Images/CorporateWomanBoxingGloves_NB.png";


//Styling for the individual images in the title block
const Image = styled.img`
    height: 25rem;
    width: auto;

`
//Styling for the entire image container within the title block
const ImageCont = styled.div`
    display: flex;
    gap: 0px;
    justify-content: flex-end; 
    position: absolute;
    bottom: 0px;
    right: 20px;
`

//Returns both images to be included in the title block
const Pictures = () => {
    return(
        <ImageCont>
            <Image src={image1} alt="A Man wearing boxing gloves"/>
            <Image src={image2} alt="A Woman wearing boxing gloves"/>
        </ImageCont>
    );
};

export default Pictures; 

