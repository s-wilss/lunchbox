import React from "react";
import ClassTimetable from "./ClassTimetables";
import ProfessionalFights from "./ProfessionalFights";

const Schedule = () => {
    return(
        <div className="Schedule">
            <h2>Schedule</h2>
            <ClassTimetable/>
            <ProfessionalFights/>
        </div>
    );
}

export default Schedule;