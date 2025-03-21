import React from 'react';
import styled from 'styled-components';
import Mike from "../../Images/mike.png";
import Sarah from "../../Images/sarah.png";
import Benson from "../../Images/benson.png";


const teamMembers = [
        {src: Mike, alt: "Mike Lee Headshot", name: "Mike Lee", job: "Head Coach"},
        {src: Sarah, alt: "Sarah Smith Headshot", name: "Sarah Smith", job: "Strength & Conditioning Specialist"},
        {src: Benson, alt: "Benson Karunayake Headshot", name: "Benson Karunayake", job: "Technique Specialist"}
    ];


const ImageBubble = styled.img`
    height: 15rem;
    width: auto;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out; /* Smooth transition */

    &:hover {
        transform: scale(1.2); /* Increases size by 20% */
    }

`


const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem; /* Adds spacing between team members */

    h3{
        font-size: 20px;
        font-family: 'Trade Winds', serif;
    }

    p{
        font-size: 15px;
    
    }

`;

const TeamMember = styled.div`
    text-align: center;
    max-width: 200px; /* Limit width of each team member */
`;

const TeamTitleCont = styled.div`
        font-size: 25px;
        font-family: 'Trade Winds', serif;
        text-align: center;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    `

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem; /* Adjusts spacing between name and job */
    white-space: nowrap; /* Prevents text from wrapping */
`;


const OurTeam = () => {
    return(
        <div>
            <TeamTitleCont>Our Team </TeamTitleCont>
            <TeamContainer>
                {teamMembers.map((teamMember, index) => (
                    <TeamMember key = {index}>
                        <ImageBubble src={teamMember.src} alt = {teamMember.alt}/>
                        <InfoContainer>
                            <h3>{teamMember.name}</h3>
                        </InfoContainer>
                        <InfoContainer>
                            <p>{teamMember.job}</p>
                        </InfoContainer>
                        
                    </TeamMember>



                ))}


            </TeamContainer>
        </div>
    );
};

export default OurTeam; 