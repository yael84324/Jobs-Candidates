import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { CandidateService } from '../services/candidateService';
import { ICandidate } from '../models/ICandidate';
import { IJob } from '../models/IJob';
interface getAllProps {
    candidateObj: ICandidate | IJob
}

export default function ChangeRating({ candidateObj }: getAllProps) {
    const [value, setValue] = React.useState<number | null>(candidateObj.rating);

    React.useEffect(() => {
        console.log("entrance rating")
        async function getCandidatesData() {
            let newObj: ICandidate | IJob = { ...candidateObj }
            if (value != undefined)
                newObj.rating = value
            console.log(newObj)
            CandidateService.updateCandidate(newObj)
        }
        getCandidatesData()
    }, [value])

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
}