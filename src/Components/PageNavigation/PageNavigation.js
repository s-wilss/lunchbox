import React from "react";
import NavigationLinks from "./NavigationLinks";
import SearchBar from "./SearchBar";
import SocialMediaLinks from "./SocialMediaLinks";

const PageNavigation = () =>{
    return(
        <div className="PageNavigation">
            <h2>Page Navigation</h2>
            <NavigationLinks/>
            <SearchBar/>
            <SocialMediaLinks/>
        </div>
    );
}

export default PageNavigation;