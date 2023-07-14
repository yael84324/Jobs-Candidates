import mongoose, { Schema, model, connect } from 'mongoose';
export interface ICandidate {
    name: string;
    email: string;
    phone?:number;
    interview: boolean;
    personalityTest: boolean;
    cognitiveTest: number;
    reliabilityTest: boolean;
    rating:  Number;
    jobId:mongoose.Schema.Types.ObjectId;

}

const candidatesSchema = new Schema<ICandidate>({
    name: { type: String, required: true,unique:true },
    email: { type: String, required: true,unique:true },
    interview: { type: Boolean, required: true },
    personalityTest: { type: Boolean, required: true },
    cognitiveTest: { type: Number, required: true },
    rating: { type: Number, required: true },
    reliabilityTest: { type: Boolean, required: true },
    phone: Number,
    jobId:{type:mongoose.Schema.Types.ObjectId,required:true}
 
  
});
export default mongoose.model<ICandidate>("candidatesModel", candidatesSchema);