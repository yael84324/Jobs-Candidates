import mongoose, { Schema, model, connect } from 'mongoose';
export interface IJob {
    name: string;
    place?: string;
    demands: string;
    jobDesc: string;
    companyDesc?: string;
    date: Date;
    status: boolean;
    logo?:String;
}
const jobSchema = new Schema<IJob>({
    name: { type: String, required: true,unique:true },
    demands: { type: String, required: true },
    jobDesc: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: Boolean, required: true },
    place: String,
    companyDesc: String,
    logo:String
});
export default mongoose.model<IJob>("jobsModel", jobSchema);