import { Eye, Edit, Download } from "lucide-react";
import api from "../apis/authApi";
import { useEffect, useState } from "react";


export default function GrievanceTable({grievances=[], user}) {
  const [edit, setEdit] = useState(false);
  const [selectedGrievance, setSelectedGrievance] = useState({});
  const [status, setStatus] = useState("pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/grievance/${selectedGrievance._id}/status`, {
        status,
      });
      setEdit(false);
      setSelectedGrievance({});
      setStatus("pending");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-primary-primary-white rounded-xl p-6 mt-8 shadow">
      {
        edit && 
        <div className="absolute left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-2xl border border-gray-200 z-50">
          <form>
            <h2 className="text-xl font-semibold text-button-secondary mb-4 border-b pb-2">
              Update Grievance Status
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-font-normal mb-1">Grievance ID</label>
              <p className="text-sm bg-gray-100 rounded px-3 py-2">{selectedGrievance._id}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-font-normal mb-1">Description</label>
              <p className="text-sm bg-gray-100 rounded px-3 py-2">{selectedGrievance.description}</p>
            </div>

            <div className="mb-6">
              <label htmlFor="status" className="block text-sm font-medium text-font-normal mb-1">Set Status</label>
              <select
                id="status"
                name="status"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-button-secondary"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={status === selectedGrievance.status}
              className={`w-full flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition ${
                status === selectedGrievance.status
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-button-secondary hover:bg-button-secondary/90"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      }
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Grievances</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search grievances..."
            className="border border-inputbox-border rounded px-3 py-1 text-sm"
          />
          <select className="border border-inputbox-border rounded px-3 py-1 text-sm">
            <option>All Departments</option>
            <option>Public Works</option>
            <option>Healthcare</option>
          </select>
          <button className="bg-button-secondary text-primary-white px-3 py-1 rounded flex items-center gap-1 text-sm">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-primary-gray text-font-normal text-left">
          <tr>
            <th className="py-2 px-3">ID</th>
            <th className="py-2 px-3">Subject</th>
            <th className="py-2 px-3">Description (AI)</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((g, i) => (
            <tr key={i} className="border-b">
              <td className="px-3 py-2">{g._id}</td>
              <td className="px-3 py-2">{g.department.description || g.department.name || "None"}</td>
              <td className="px-3 py-2">{g.description}</td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    g.status === "Pending"
                      ? "bg-red-100 text-red-500"
                      : "bg-blue-100 text-button-bg-button-secondary"
                  }`}
                >
                  {g.status}
                </span>
              </td>
              <td className="px-3 py-2 flex gap-3">
                {user !== "citizen" && <Edit size={16} className="cursor-pointer text-font-normal" onClick={() => {
                  setEdit(!edit);
                  console.log(g);
                  setSelectedGrievance(g);
                }}/>}
                <Eye size={16} className="cursor-pointer text-font-normal" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center text-sm text-font-normal mt-4">
        <p>Showing 1-6 of 156 entries</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded">Previous</button>
          <button className="px-3 py-1 border rounded bg-button-secondary text-primary-white">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
