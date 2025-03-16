import React from "react";
import Pictures from  "./Pictures";
import Title from  "./Title";

const Header =() => {
    return(
        <div className="Header">
            <h2>Header</h2>
            <Title/>
            <Pictures/>

        </div>
    );
}

export default Header