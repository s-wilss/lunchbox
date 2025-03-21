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

const TitleBar = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    background-image: linear-gradient(to bottom, rgb(69, 131, 55), rgb(49, 105, 67));
    padding-left: 30px;

    h2{
        font-size: 30px;
        font-family: 'Trade Winds', serif;
        color: white; 
        margin: 0;
        padding: 10px 0;

    }



    `

const FullCont = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, rgb(57, 95, 40), rgb(32, 54, 22));

`


const StackedDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%; // Added width to limit the size of the left content
    margin-left: 30px; // Added margin to give some space on the left


`
const PhotosVideosCont = styled.div`
    width: 40%; // Set width for the photos section
    margin-right: 30px; // Added margin to give some space on the right
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
                <PhotosVideosCont>
                    <PhotosVideos/>
                </PhotosVideosCont>
            </AboutUsCont>
        </FullCont>
    );
};

export default AboutUs;