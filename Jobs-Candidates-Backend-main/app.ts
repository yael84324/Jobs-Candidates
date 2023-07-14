import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { IJob } from './models/jobsModel';
import connectDB from './dbConnection';
import jobRouter from './routers/jobRouter';
import candidateRouter from './routers/candidateRouter';
const bodyParser = require("body-parser");
const app=express();
connectDB()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())
app.use(bodyParser.json())
dotenv.config();
console.log("console log")
app.listen(3000, () => { console.log(`listening port ${3000}`) });
app.use('/jobs',jobRouter)
app.use('/candidates',candidateRouter)