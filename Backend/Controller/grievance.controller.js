import {Grievance} from '../Models/grievanceModel.js'

export const submitGrievance = async (req, res) => {
    try {
        const { subject, description } = req.body

        const grievance = new Grievance({
            subject,
            description,
            department: req.department._id,
            user: req.user.id
        });
        await grievance.save();
        res.status(201).json({ message: "Grievance submitted successfully", grievance });
    } catch (error) {
        console.error("Error in creating greivance", error)
        res.status(500).json({ error: "Error submitting grievance" });
    }
}

export const getUserGreivance = async (req, res) => {
    try {
        const grievance = await Grievance.find({ user: req.user.id }).populate("department")
        res.json(grievance)
    } catch (error) {
        res.status(500).json({ error: "Error fetching grievances" });
    }
}
export const getDepartmentGrievances = async (req, res) => {
    try {
        const grievances = await Grievance.find({ department: req.user.department }).populate("user");
        res.json(grievances);
    } catch (error) {
        res.status(500).json({ error: "Error fetching department grievances" });
    }
};

export const updateGrievanceStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    console.log(status);
    console.log(id);
    try {
        const updated = await Grievance.findByIdAndUpdate(id, { status }, { new: true });
        res.json({ message: "Status updated", grievance: updated });
    } catch (error) {
        res.status(500).json({ error: "Error updating grievance" });
    }
};

export const getAllGrievances = async (req, res) => {
    try {
        const grievances = await Grievance.find()
            .populate("user", "name email")
            .populate("department", "name");
        res.json(grievances);
    } catch (error) {
        console.error("Error fetching all grievances:", error);
        res.status(500).json({ error: "Error fetching all grievances" });
    }
};