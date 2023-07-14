
import * as React from 'react';
import Button from '@mui/material/Button';
import { FormAdding } from '../components/addingForm';
import { JobService } from '../services/jobService';
import GenericTable from '../components/table';

export interface fieldObject {
    field: string,
    required: boolean
}

function JobPage() {
    const [showAddJob, setShowAddJob] = React.useState<Boolean>(false)
    const [showJobs, setShowJobs] = React.useState<Boolean>(false)
    const [jobData, setJobData] = React.useState<any[]>([]);

    const candidateFields: string[] = [
        "rating", "reliabilityTest", "cognitiveTest", "personalityTest",
        "interview", "email", "name", "jobId"
    ]
    const jobFields: fieldObject[] = [
        { field: "status", required: true }, { field: "date", required: true }, { field: "jobDesc", required: true }, { field: "demands", required: true },
        { field: "name", required: true }, { field: "logo", required: false }
        , { field: "place", required: false }, { field: "companyDesc", required: false }
    ]
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await JobService.getAllJobs();
            setJobData(data);

        };

        fetchData();
    }, [showJobs]);


    const handleAddJob = () => {
        setShowAddJob(true);
        setShowJobs(false)
    }
    const handleShowJobs = () => {
        setShowJobs(true)
        setShowAddJob(false)
    }
    return (<>
        <div>page job</div>
        <Button
            key="addjob"
            onClick={handleAddJob}
            sx={{ my: 2, color: 'pink', display: 'block' }}  >
            addJob
        </Button>
        <Button
            key="addjob"
            onClick={handleShowJobs}
            sx={{ my: 2, color: 'pink', display: 'block' }}  >
            showJobs
        </Button>


        {
            showAddJob && <FormAdding lines={jobFields} status='job' addFunc={JobService.addJob} ></FormAdding>
        }
        {
            showJobs && <GenericTable lines={jobFields} status='job' data={jobData}></GenericTable>
        }
    </>
    );
}
export default JobPage;