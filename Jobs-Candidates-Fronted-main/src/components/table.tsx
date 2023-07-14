import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { JobService } from '../services/jobService';
import { IJob } from '../models/IJob'
import { ICandidate } from '../models/ICandidate';
import { type } from '@testing-library/user-event/dist/type';
import { Link } from 'react-router-dom';
import CandidateTable from '../pages/candidateTable';
import ChangeRating from './rating';
import Example from './showLogo';
import { fieldObject } from '../pages/jobPage';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
interface getAllProps {
    lines: fieldObject[];
    status: string;
    data: ICandidate[] | IJob[];

}


export default function GenericTable({ lines, status, data }: getAllProps) {
    interface IData {
        [key: string]: any
    }



    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {lines.map((title, index) => <StyledTableCell align="right">{title.field}</StyledTableCell>)}
                        {/* //כותרות */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((d, index) => (
                        <StyledTableRow key={d.name}>
                            {lines?.map((a: fieldObject) => {
                                console.log(typeof (a) + "a")
                                if (status === "job" && a.field === "name") {
                                    return <StyledTableCell align="left" component="th" scope="row" >
                                        <Link to={`/candidatesdashboard/${d._id}`}>{d[a.field]}</Link></StyledTableCell>
                                }
                                else {
                                    if (a.field === "rating") {

                                        return <ChangeRating candidateObj={d}></ChangeRating>
                                    }
                                    else {
                                        if (a.field === "logo")
                                            return <Example imgB={d[a.field]}></Example>
                                    }
                                    return <StyledTableCell align="left" component="th" scope="row">{'' + d[a.field]}</StyledTableCell>
                                }

                            })}
                        </StyledTableRow>

                    ))}

                </TableBody>

            </Table>
        </TableContainer>
    );
}



