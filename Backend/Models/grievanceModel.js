import mongoose from "mongoose";

const grievanceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    status: { type: String, enum: ['pending', 'in_progress', 'resolved'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export const grievance = mongoose.model("grievance", grievanceSchema)