import React from "react";
import ClassTimetable from "./ClassTimetables";
import ProfessionalFights from "./ProfessionalFights";
import styled from "styled-components";


//Styling for the title 
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

//Styling for the entire container
const FullCont = styled.div`
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to bottom, rgb(32, 54, 22), rgb(15, 26, 11));
    width: 100%;
    height: 800px; 
    justify-content: space-between;
    align-items: center;
`

//Returns title, ProfessionalFights & Class Timetable components
const Schedule = () => {
    return(
        <div id ="schedule">
            <TitleBar>
                   <h2>Schedule</h2> 
            </TitleBar>
            <FullCont>
                <ProfessionalFights/>
                <ClassTimetable/>
            </FullCont>
        </div>
    );
}

export default Schedule;