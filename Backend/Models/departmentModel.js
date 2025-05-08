import mongoose from "mongoose";
const departmentSchema = new mongoose.Schema({
    name: String,
    description: String
});

export const Department = mongoose.model("Department", departmentSchema)