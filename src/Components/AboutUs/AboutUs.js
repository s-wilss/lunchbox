import React from "react";
import styled from 'styled-components'
import IntroductionHistory from "./IntroductionHistory";
import OurTeam from "./OurTeam";
import PhotosVideos from "./PhotosVideos";

//Styling for the main container
const AboutUsCont = styled.div`
    display: flex;
    width: 100%;
    position: relative; 
    height: 800px; 
    justify-content: space-between;
    align-items: center;
    `
//Styling for the title container
const TitleBar = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    background-image: linear-gradient(to right, rgb(185, 130, 59), rgb(49, 105, 67));
    padding-left: 30px;

    h2{
        font-size: 30px;
        font-family: 'Trade Winds', serif;
        color: white; 
        margin: 0;
        padding: 10px 0;
    }
    `

 //Background gradient + position of all elements
const FullCont = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, rgb(57, 95, 40), rgb(32, 54, 22));

`
//Stacked LHS containers
const StackedDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%; 
    margin-left: 30px; 

`

//RHS container
const PhotosVideosCont = styled.div`
    width: 40%; 
    margin-right: 30px; 
`

//Return all AboutUs components
const AboutUs =() => {
    return(
        <FullCont>
            <TitleBar>
                <h2 id = "introduction"> About Us</h2>
            </TitleBar>
            <AboutUsCont>
                <StackedDiv>
                    <IntroductionHistory/>
                    <OurTeam/>
                </StackedDiv>
                <PhotosVideosCont>
                    <PhotosVideos/>
                </PhotosVideosCont>
            </AboutUsCont>
        </FullCont>
    );
};

export default AboutUs;