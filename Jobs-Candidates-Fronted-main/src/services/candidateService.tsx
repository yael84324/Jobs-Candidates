import axios from 'axios';
import { ICandidate } from '../models/ICandidate';
axios.defaults.baseURL = 'http://localhost:3000';





export const CandidateService = {
    getCandidates: async () => {
        const result = await axios.get('/candidates/getCandidates');
        return result.data;
    },
    getCandidatesByJobId: async (id: string) => {
        const result = await axios.get(`/candidates/getCandidatesByJobId/${id}`);
        return result.data;
    },
    addCandidate: async (newO: Object | ICandidate) => {
        try {
            const result = await axios.post<object | ICandidate>(`/candidates/addCandidate`, newO);
            console.log('Candidate added successfully:', result.data);
            return result.data;
        } catch (error) {
            if (error instanceof Error)
                console.error('Error adding item:', error.message);
            return null;
        }
    },
    updateCandidate: async (newCandidate: Object | ICandidate) => {
        try {
            const result = await axios.put<object | ICandidate>(`/candidates/updateCandidate`, newCandidate);
            console.log('Candidate updated successfully:', result.data);
            return result.data;
        }
        catch (error) {
            if (error instanceof Error)
                console.error('Error adding item:', error.message);
            return null;
        }
    }
}