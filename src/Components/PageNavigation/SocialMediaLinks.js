import React from 'react';
import styled from 'styled-components'

//Styling for container holding all links, & individual links
const LinkCont = styled.div`
    display: flex;
    gap: 2rem;
    padding-right: 2rem;
    
    justify-content: center;
    color:rgb(255, 255, 255) ;
    font-size: 20px;
    transition: color 0.3s ease;
    
    a {
        transition: color 0.3s ease;
        color: rgb(255, 255, 255);
        text-decoration: none;
        
        &:hover {
            color: rgb(12, 250, 12);
        }
    }
    `
    

//Returns three links (wout functionality)
const SocialMediaLinks = () => {
    return(
        <div>
            <LinkCont>
                <a href = "#">Facebook</a>
                <a href = "#">Instagram</a>
                <a href = "#">Youtube</a>
            </LinkCont>

        </div>
    );
};

export default SocialMediaLinks; 