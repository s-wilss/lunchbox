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
    height: 600px; 
    justify-content: space-around;
    align-items: center;
    background-color: rgb(57, 95, 40);
    `

const TitleBar = styled.div`
    display: flex;
    height: 50px;
    align-items: flex start;
    background-image: linear-gradient(to left, rgb(57, 95, 40), rgb(19, 51, 29));
    padding-left: 30px;
    `

const FullCont = styled.div`
    display: flex;
    flex-direction: column;

`


const StackedDiv = styled.div`
    display: flex;
    flex-direction: column;
`






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
                <PhotosVideos/>
            </AboutUsCont>
        </FullCont>
    );
};

export default AboutUs;