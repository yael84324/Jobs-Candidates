import { model } from "mongoose";
import jobsModel, { IJob } from "../models/jobsModel";

import { Request, Response } from "express";
const Job = model<IJob>('jobs', jobsModel.schema);
export class jobController {

    public async getJobs(req: Request, res: Response) {
        try {
            const jobs = await Job.find();
            console.log("get job")
            res.status(200).json(jobs);
        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }

    public async addJob(req: Request, res: Response) {
        try {
            console.log("add job")
            const { name } = req.body
            const job = await Job.findOne({ name: name })
            console.log("1" + job)
            if (job != null) {
                return res.status(200).send("The job exists");
            }
            const a:IJob=req.body
            const newJob = await Job.create(a)
            res.status(200).json(newJob);
        } catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }
    public async getJobById(req: Request, res: Response) {

        try {
            const job = await Job.findById({ _id: req.params.id })

            console.log(job);
            res.status(200).json(job)
        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }

    public async deleteJob(req: Request, res: Response) {

        try {
            const { id } = req.params;
            const job = await Job.findByIdAndDelete(id);

            res.status(200).send("deleted");
        } catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message });
            }
        }
    }

    public async updateJob(req: Request, res: Response) {
        try {


            const job = await Job.findOneAndUpdate({ name: req.body.name }, req.body, { new: true });

            res.json(job)

        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }

    // מחזיר את התמונה בפורמט של בייס 64
    public async decodeLogo(req: Request, res: Response)
    {
        try{
            const decode = (str: string):string => Buffer.from(req.params.logo, 'base64').toString('binary');
            return res.send(decode);
        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }



}




//create
//update
//getAll

//getById
//delete