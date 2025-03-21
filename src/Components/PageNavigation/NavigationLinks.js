import React from 'react';
import styled from 'styled-components'

const NavCont = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
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
    
    li {
        list-style-type: none;
        display: inline-block;
        margin: 0 10px;
    }
    `

const NavigationLinks = () => {
    return(
        <div>
            <NavCont>
                <li><a href="#introduction">About Us</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#joinus">Join Us</a></li>
            </NavCont>
        </div>
    );
};

export default NavigationLinks; 