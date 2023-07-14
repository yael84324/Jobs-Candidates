import { model } from "mongoose";


import { Request, Response } from "express";
import candidateModel, { ICandidate } from "../models/candidateModel";
const Candidates = model<ICandidate>('candidates', candidateModel.schema);
export class candidateController {

    public async getCandidates(req: Request, res: Response) {
        try {
            const candidates = await Candidates.find();
            console.log("get candidate")
            res.status(200).json(candidates);
        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }

    public async getCandidatesByJobId(req: Request, res: Response) {
        try {
            const candidates = await Candidates.find({ jobId: req.params.jobId })
            console.log("get candidates by jpb ID" + req.params.jobId)
            res.status(200).json(candidates);
        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }

    public async addCandidate(req: Request, res: Response) {
        try {
            const { email } = req.body
            console.log("entrance addCandidate")
            //בדיקה שמשרה כזה אינו קיים:
            const Candidate = await Candidates.findOne({ email: email })

            if (Candidate != null) {
                res.status(200).send("the candidate exists")
            }
            console.log(req.body.json)
            const newCandidate = await Candidates.create(req.body)
            res.status(200).json(newCandidate);
        }
        catch (e) {
            console.log("entrance addCandidate error")
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }
    public async getCandidateById(req: Request, res: Response) {

        try {
            const candidate = await Candidates.findById({ _id: req.params.id })

            console.log(candidate);
            res.status(200).json(candidate)
        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }

    public async deleteCandidate(req: Request, res: Response) {

        try {
            const { id } = req.params;
            const candidate = await Candidates.findByIdAndDelete(id);

            res.status(200).send("deleted");
        } catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message });
            }
        }
    }

    public async updateCandidate(req: Request, res: Response) {
        try {


            const job = await Candidates.findByIdAndUpdate(req.body._id, req.body, { new: true });

            res.json(job)

        }
        catch (e) {
            if (e instanceof Error) {
                res.status(400).json({ message: e.message })
            }
        }
    }
}


