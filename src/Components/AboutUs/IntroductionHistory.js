import React from 'react';
import styled from 'styled-components';


//Styling for the main body of text
const TextContent = styled.div`
    font-family: 'Host Grotesk', sans-serif;
    font-size: 16px;
    color: white;
    line-height: normal;
    margin: 20px;
`

//Styling for the title text
const IntroTitleCont = styled.div`
        font-size: 25px;
        font-family: 'Trade Winds', serif;
        text-align: center;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    `

//Return the title & body text
const IntroductionHistory = () => {
    return(
        <div className='IntroductionHistory'>
            <IntroTitleCont>
                Introduction & History
            </IntroTitleCont>
            <TextContent>
                Welcome to Lunchbox. We are an elite level boxing gym that excels at making fighters out of busy professionals. Founded in 2014,<br/> 
                we have over ten years helping individuals of all backgrounds develop their skills, confidence, 
                and fitness through the art of boxing. Whether you're stepping into the ring for the first time or refining your technique, our expert coaches provide structured training that balances discipline, intensity, and fun. At 
                Lunchbox, we believe that boxing is more than just a sport—it’s a powerful tool for physical and mental transformation.
                <br/>
                Our state-of-the-art facility features professional-grade equipment and dedicated training areas designed to optimize your boxing journey. Join our thriving community of professionals who have discovered the perfect outlet 
                for stress relief while achieving unprecedented levels of fitness and self-mastery.

            </TextContent>
        </div>
    );
};

export default IntroductionHistory; 