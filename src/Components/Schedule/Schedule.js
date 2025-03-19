import React from "react";
import ClassTimetable from "./ClassTimetables";
import ProfessionalFights from "./ProfessionalFights";

const Schedule = () => {
    return(
        <div id ="schedule">
            <h2>Schedule</h2>
            <ClassTimetable/>
            <ProfessionalFights/>
        </div>
    );
}

export default Schedule;