import React, { useState } from "react";
import api from "../apis/authApi";
import { Upload, Phone } from "lucide-react";

const GrievanceForm = () => {
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("department", department);
    formData.append("description", description);
    if (file) formData.append("file", file); // if your backend accepts files

    try {
      const response = await api.post("/grievance/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Grievance submitted successfully!");
      setSubject("");
      setDepartment("");
      setDescription("");
      setFile(null);
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-primary-gray px-24 py-4 gap-4">
      <div className="flex w-full flex-col-reverse lg:flex-row bg-primary-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3 p-6">
          <h2 className="text-2xl font-bold mb-4">File Your Grievance</h2>

          {message && (
            <p className="mb-4 text-sm font-semibold text-red-500">{message}</p>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-label-text mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Brief description of your grievance"
              className="w-full p-2 border border-inputbox-border rounded focus:outline-none focus:ring-2 focus:ring-inputbox-focus"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-label-text mb-1">
              Department
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-2 border border-inputbox-border rounded focus:outline-none focus:ring-2 focus:ring-inputbox-focus"
            >
              <option value="">Select department</option>
              <option value="health">Health</option>
              <option value="transport">Transport</option>
              <option value="education">Education</option>
              {/* Add more options here as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-label-text mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide detailed information about your grievance"
              className="w-full p-2 border border-inputbox-border rounded focus:outline-none focus:ring-2 focus:ring-inputbox-focus h-32"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-label-text mb-1">
              Supporting Documents
            </label>
            <div className="w-full p-4 border-2 border-dashed border-inputbox-border rounded flex flex-col items-center justify-center">
              <Upload className="w-8 h-8 text-font-light mb-2" />
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-button-secondary ring-inputbox-focus text-primary-white p-2 rounded hover:bg-button-hover"
          >
            Submit Grievance
          </button>
        </form>

        {/* Guidelines Section */}
        <div className="w-full lg:w-1/3 p-6 bg-primary-gray border-l rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">Filing Guidelines</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-label-text">
            <li>
              Provide a clear and concise subject that describes your grievance
            </li>
            <li>Select the most relevant department for your complaint</li>
            <li>Include all relevant details in the description</li>
            <li>Attach supporting documents if available</li>
          </ol>

          <div className="mt-6 p-4 bg-primary-gray rounded">
            <p className="text-sm font-medium text-label-text">
              Need Assistance?
            </p>
            <p className="text-sm text-font-normal">
              Contact our support team:
            </p>
            <div className="flex items-center mt-1">
              <Phone className="w-4 h-4 text-font-normal mr-2" />
              <p className="text-sm text-font-normal">1800-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrievanceForm;
