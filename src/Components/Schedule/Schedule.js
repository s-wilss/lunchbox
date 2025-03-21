import React from "react";
import ClassTimetable from "./ClassTimetables";
import ProfessionalFights from "./ProfessionalFights";
import styled from "styled-components";

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


const FullCont = styled.div`
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to bottom, rgb(32, 54, 22), rgb(15, 26, 11));
    width: 100%;
    height: 800px; 
    justify-content: space-between;
    align-items: center;
   

`



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