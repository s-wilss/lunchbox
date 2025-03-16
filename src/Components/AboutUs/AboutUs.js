import React from "react";
import IntroductionHistory from "./IntroductionHistory";
import OurTeam from "./OurTeam";
import PhotosVideos from "./PhotosVideos";

const AboutUs =() => {
    return(
        <div className="AboutUs">
            <h2>About Us</h2>
            <IntroductionHistory/>
            <OurTeam/>
            <PhotosVideos/>
        </div>
    );
};

export default AboutUs;