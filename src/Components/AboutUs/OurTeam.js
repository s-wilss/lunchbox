import React from 'react';
import styled from 'styled-components';
import Mike from "../../Images/mike.png";
import Sarah from "../../Images/sarah.png";
import Benson from "../../Images/benson.png";

//Array to hold the details of each team member
const teamMembers = [
        {src: Mike, alt: "Mike Lee Headshot", name: "Mike Lee", job: "Head Coach"},
        {src: Sarah, alt: "Sarah Smith Headshot", name: "Sarah Smith", job: "Strength & Conditioning Specialist"},
        {src: Benson, alt: "Benson Karunayake Headshot", name: "Benson Karunayake", job: "Technique Specialist"}
    ];

//Styling for each individual team member image w/ on hover effect
const ImageBubble = styled.img`
    height: 15rem;
    width: auto;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out; 

    &:hover {
        transform: scale(1.2); 
    }
`

//Styling for entire container minus title
const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem; 

    h3{
        font-size: 20px;
        font-family: 'Trade Winds', serif;
    }

    p{
        font-size: 15px;
    }
`;

//Styling for each individual member
const TeamMember = styled.div`
    text-align: center;
    max-width: 200px; 
`;

//Styling for the title
const TeamTitleCont = styled.div`
        font-size: 25px;
        font-family: 'Trade Winds', serif;
        text-align: center;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    `

//Styling for each individual bit of information related to the team member
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem; /* Adjusts spacing between name and job */
    white-space: nowrap; /* Prevents text from wrapping */
`;

//Return the structure using .map to iterate for each entry in the array, inserting the src, alt, name & job into correct tags
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