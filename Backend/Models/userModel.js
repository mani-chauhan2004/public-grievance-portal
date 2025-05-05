import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['citizen', 'officer', 'admin'],
        default: 'citizen'
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        default: null,
    },

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)