import React from 'react';
import styled from 'styled-components';

/* Styled components for your table */
const ClassTable = styled.table`
    font-family: 'Host Grotesk', sans-serif;
    font-size: 16px;
    color: white;
    width: 100%; /* Make table take full width of container */
`;

const TitleTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%; /* Control width of each table section */
`;

const TableSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Changed from space-around for better control */
    margin-right: 80px;
    gap: 30px; /* This adds the gap between your tables */
`;

const Heading = styled.h5`
    text-align: center; /* Ensure text is centered */
    font-size: 20px;
    font-family: 'Trade Winds', serif;
    width: 100%; /* Full width of parent */
    margin-bottom: 10px;
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden; /* Hide overflow */
    text-overflow: ellipsis; /* Add ellipsis if text is too long */
`;

const TableCell = styled.td`
    padding: 10px;
    line-height: 1;
`;

const FirstTableCell = styled.td`
    background-color: rgb(19, 51, 29);
    font-weight: bold;
`;

const TimetableTitleCont = styled.h2`
    font-size: 25px;
    font-family: 'Trade Winds', serif;
    text-align: center;
    width: 100%; /* Make this full width */
    margin-bottom: 20px; /* Increased margin for better spacing */
`;

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