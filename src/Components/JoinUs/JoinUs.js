import React from "react";
import SendUsAMessage from "./SendUsAMessage";
import SignUp from "./SignUp";
import styled from "styled-components";



const TitleBar = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    background-image: linear-gradient(to right, rgb(185, 130, 59), rgba(49, 105, 67, 0));
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
    background-image: linear-gradient(to bottom, rgb(15, 26, 1), rgb(12, 20, 1));
    width: 100%;
    height: 500px; 
    justify-content: space-between;
    align-items: center;
   

`





const JoinUs =() =>{
    return(
        <div id="joinus">
            <TitleBar>
                <h2>
                    Join Us
                </h2>
            </TitleBar>

            <FullCont>
                <SignUp/>
                <SendUsAMessage/>
                
            </FullCont>
            
            
        </div>
    );
}

export default JoinUs;