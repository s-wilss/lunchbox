import React from 'react';
import styled from 'styled-components';


//Text to include in the statement
const ParagraphText = '2025 @ Lunchbox PTY LTD\n15/103 Campbell Street Rivervale 6103\nPerth Western Australia\ninfo@lunchbox.com';

//Styling for text
const ParagraphCont = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-top: 8px;
  white-space: pre-line;  */
`;

//Return the Title and paragraph text
const CopyrightStatement = () => {
    return(
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Trade Winds, serif', color: 'white', fontSize: '25px' }}>Copyright Statement</h2>
            <ParagraphCont>{ParagraphText}</ParagraphCont>
        </div>
    );
};

export default CopyrightStatement; 