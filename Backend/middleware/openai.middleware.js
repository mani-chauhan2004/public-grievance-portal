import axios from "axios";
import { Department } from "../Models/departmentModel.js";
// import dotenv from 'dotenv';
// dotenv.config();

const classifyGrievance = async (req, res, next) => {
  const { description } = req.body;

  const maxRetries = 5;  // Maximum number of retries
  let retryAttempts = 0;

  const prompt = `
  Grievance Description: "${description}"
  Departments: Sanitation, Water Supply, Roads, Public Lighting, Tax, Parks
  
  Based on the description, which department should handle this? Reply with only the department name.
  `;

  // Retry function with exponential backoff
  const makeRequest = async () => {
    try {
      const geminiResponse = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }
      );

      const responseText = geminiResponse.data.candidates[0].content.parts[0].text.trim();
      const department = await Department.findOne({ name: responseText });

      if (!department) {
        return res.status(400).json({ error: "Invalid department classified" });
      }

      req.department = department;
      next();
    } catch (err) {
      // If rate limit error is encountered
      if (err.response && err.response.status === 429 && retryAttempts < maxRetries) {
        retryAttempts++;
        const delay = Math.pow(2, retryAttempts) * 1000;  // Exponential backoff
        console.log(`Rate limit exceeded. Retrying in ${delay / 1000} seconds... Attempts left: ${maxRetries - retryAttempts}`);

        setTimeout(makeRequest, delay);  // Retry after delay
      } else {
        console.error("Gemini API Error:", err?.response?.data || err.message);
        return res.status(500).json({ error: "Error classifying grievance. Please try again later." });
      }
    }
  };

  // Start the first API call attempt
  makeRequest();
};

export default classifyGrievance;
