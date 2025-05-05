import mongoose from "mongoose";
const departmentSchema = new mongoose.Schema({
    name: String,
    description: String
});

export const department = mongoose.model("department", departmentSchema)