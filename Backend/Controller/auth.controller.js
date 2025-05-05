import { User } from "../Models/userModel.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate if any of the fields are empty
        if ([name, email, password].some((field) => !field || field.trim() === "")) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user already exists by email or name
        const existingUser = await User.findOne({ $or: [{ email }, { name }] });
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email or name already exists' });
        }

        // Create and save the new user
        const user = new User({ name, email, password });
        await user.save();

        const createdUser = await User.findById(user._id).select("-password -refreshToken");

        if (!createdUser) {
            return res.status(500).json({ message: "Something went wrong while creating user" });
        }

        const accessToken = await user.generateAccessToken(user);
        const refreshToken = await user.generateRefreshToken(user);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
        });

        return res.status(201).json({
            message: 'User registered successfully',
            accessToken,
            user: createdUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error occurred. Please try again later.' });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password is require"
            })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
        });
        return res.status(201).json({
            message: "Login successfully",
            accessToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                userType: user.userType,

            }
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server error occurred. Please try again later.'
        });
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("refreshToken", {
            httpOnly: true,
        });
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error during logout" });
    }
}