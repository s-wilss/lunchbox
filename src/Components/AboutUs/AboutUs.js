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

const AboutUs =() => {
    return(
        <AboutUsCont>
            <h2 class = "title-separation">About Us</h2>
            <IntroductionHistory/>
            <OurTeam/>
            <PhotosVideos/>
        </AboutUsCont>
    );
};

export default AboutUs;