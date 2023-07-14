//TODO ליצור פונ שמביאה את כל נתוני המשרות מהשרת
import axios from 'axios';
import { IJob } from '../models/IJob';
axios.defaults.baseURL = 'http://localhost:3000';



export const JobService = {
  getAllJobs: async (): Promise<any[]> => {
    const result = await axios.get('/jobs/getAllJobs');
    return result.data;
  },
  addJob: async (newO: Object | IJob) => {
    try {
      console.log("entrance add job react")
      console.log(typeof (newO) + "type")

      console.log(JSON.parse(JSON.stringify(newO)) + " newjob");
      const result = await axios.post<Object | IJob>('/jobs/addJob', newO);
      console.log('Item added successfully:', result.data);
      return result.data;
    } catch (error) {
      if (error instanceof Error)
        console.error('Error adding item:', error.message);
      return null;
    }
  }

};






