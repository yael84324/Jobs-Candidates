import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobPage from "./jobPage";
import CandidateTable from "./candidateTable";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<JobPage></JobPage>}></Route>
                <Route path="/candidatesdashboard/:jobId" element={<CandidateTable></CandidateTable>}></Route>
            </Routes>
        </BrowserRouter>
    );
}