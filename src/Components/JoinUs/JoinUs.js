import React from "react";
import SendUsAMessage from "./SendUsAMessage";
import SignUp from "./SignUp";

const JoinUs =() =>{
    return(
        <div className="JoinUs">
            <h2>Join Us</h2>
            <SendUsAMessage/>
            <SignUp/>
        </div>
    );
}

export default JoinUs;