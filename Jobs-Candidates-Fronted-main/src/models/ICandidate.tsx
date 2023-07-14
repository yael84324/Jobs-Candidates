import axios from 'axios';
import { ObjectId } from "bson";
export interface ICandidate {
    name: string;
    email: string;
    phone?:number;
    interview: boolean;
    personalityTest: boolean;
    cognitiveTest: number;
    reliabilityTest: boolean;
    rating:  number;
    //???
   jobId:string;
   [key: string]: any

}