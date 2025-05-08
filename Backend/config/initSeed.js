import { User } from '../Models/userModel.js';
import { Department } from '../Models/departmentModel.js';

export const initSeed = async () => {
    const departments = ["Sanitation", "Water Supply", "Roads"];
    const deptDocs = [];

    // Create Departments
    for (let name of departments) {
        let dept = await Department.findOne({ name });
        if (!dept) {
            dept = await Department.create({ name, description: `${name} Department` });
            console.log(`✅ Department created: ${name}`);
        }
        deptDocs.push(dept);
    }

    // Create Admin (plain password; will be hashed by schema middleware)
    const adminExists = await User.findOne({ email: "admin@samadhan.gov" });
    if (!adminExists) {
        await User.create({
            name: "Admin",
            email: "admin@samadhan.gov",
            password: "admin123", // 🔸 plain text password
            role: "admin"
        });
        console.log("✅ Admin created: admin@samadhan.gov / admin123");
    }

    // Create Officers for each department
    for (const dept of deptDocs) {
        const officerEmail = `${dept.name.toLowerCase().replace(" ", "")}@samadhan.gov`;
        const officerExists = await User.findOne({ email: officerEmail });
        if (!officerExists) {
            await User.create({
                name: `${dept.name} Officer`,
                email: officerEmail,
                password: "officer123", // 🔸 plain text password
                role: "officer",
                department: dept._id
            });
            console.log(`✅ Officer created: ${officerEmail} / officer123`);
        }
    }
};
