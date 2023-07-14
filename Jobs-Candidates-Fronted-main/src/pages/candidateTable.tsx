import React from "react";
import { ICandidate } from "../models/ICandidate";
import { CandidateService } from "../services/candidateService";
import GenericTable from "../components/table";
import { useParams } from "react-router-dom";
import { fieldObject } from "./jobPage";



export default function  CandidateTable() {
    const { jobId } = useParams();
    const [data, setData] = React.useState<ICandidate[]>([])
    const fields: fieldObject[]  = [
        {field:"rating",required:true},{field:"reliabilityTest",required:true},{field:"cognitiveTest",required:true}
        ,{field:"personalityTest",required:true},{field:"interview",required:true},{field:"email",required:true} ,{field:"name",required:true},
        {field:"jobId",required:true}
    ]
    React.useEffect(() => {
        console.log("entrance candudate table"+jobId) 
        async function getCandidatesData() {
            let apiData = []
            if (jobId != undefined)
                apiData = await CandidateService.getCandidatesByJobId(jobId);
            setData(apiData)
        }
        getCandidatesData()
    }, [])

    return (<GenericTable lines={fields} status={"candidates"} data={data}></GenericTable>);

}
