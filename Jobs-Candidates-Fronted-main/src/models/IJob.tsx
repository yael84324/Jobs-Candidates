import axios from 'axios';
export interface IJob {
    name: string;
    place?: string;
    demands: string;
    jobDesc: string;
    companyDesc?: string;
    date: String;
    status: boolean;
    logo?: String;
    [key: string]: any
  }