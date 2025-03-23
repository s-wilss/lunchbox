import React from 'react';
import styled from 'styled-components';

// Style for individual table
const ClassTable = styled.table`
    font-family: 'Host Grotesk', sans-serif;
    font-size: 16px;
    color: white;
    width: 100%; 
`;

//Style for each tilt, table pair
const TitleTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%; 
`;

//Style for entire table area
const TableSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    margin-right: 150px;
    margin-bottom: 100px;
    gap: 30px; 
`;

//Style for heading for each table
const Heading = styled.h5`
    text-align: center; 
    font-size: 20px;
    font-family: 'Trade Winds', serif;
    width: 100%; 
    margin-bottom: 0px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
`;

//Style for individual tables cells
const TableCell = styled.td`
    padding: 20px;
    line-height: 1;
}
`;

//Different styling for first column
const FirstTableCell = styled.td`
    background-color: rgb(19, 51, 29);
    font-weight: bold;
`;

//Style for section title
const TimetableTitleCont = styled.h2`
    font-size: 25px;
    font-family: 'Trade Winds', serif;
    text-align: center;
    width: 100%; /* Ensure full width */
    margin-right: 150px; /* Add this to match TableSpace */
    display: block;
`;

//Returns title and both tables
const ClassTimetable = () => {
    return (
        <div className="ClassTimetable">
            <TimetableTitleCont>Classes</TimetableTitleCont>
            <TableSpace>
                <TitleTable>
                    <Heading>Boxing Fitness Classes</Heading>
                    <ClassTable>
                        <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <FirstTableCell>Mon</FirstTableCell>
                                <TableCell> - </TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell> - </TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Tue</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Wed</FirstTableCell>
                                <TableCell> - </TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Thu</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Fri</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Sat</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Sun</FirstTableCell>
                                <TableCell> - </TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                        </tbody>
                    </ClassTable>
                </TitleTable>

                <TitleTable>
                    <Heading>Boxing Technique Classes</Heading>
                    <ClassTable>
                        <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <FirstTableCell>Mon</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Tue</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Wed</FirstTableCell>
                                <TableCell> - </TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Thu</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell> - </TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Fri</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell> - </TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Sat</FirstTableCell>
                                <TableCell>6:30 AM</TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                            <tr>
                                <FirstTableCell>Sun</FirstTableCell>
                                <TableCell> - </TableCell>
                                <TableCell>8:00 AM</TableCell>
                                <TableCell>11:00 AM</TableCell>
                                <TableCell>5:00 PM</TableCell>
                            </tr>
                        </tbody>
                    </ClassTable>
                </TitleTable>
            </TableSpace>
        </div>
    );
};

export default ClassTimetable;