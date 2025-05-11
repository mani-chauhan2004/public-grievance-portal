import { Eye, Edit, Download } from "lucide-react";
import api from "../apis/authApi";
import { useEffect, useState } from "react";


export default function GrievanceTable({grievances=[], user}) {
  const [edit, setEdit] = useState(false);
  const [selectedGrievance, setSelectedGrievance] = useState({});
  const [status, setStatus] = useState("pending");

  const handleSubmit = async () => {
    e.preventDefault();
    try {
      const res = await api.put(`/grievance/${selectedGrievance._id}/status`, {
        status
      } );
      console.log(res);
      setEdit(false);
      setSelectedGrievance({});
      setStatus("pending");
    }catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-primary-primary-white rounded-xl p-6 mt-8 shadow">
      {
        edit && <form className="absolute w-4/12 h-4/12 bg-primary-gray left-4/12">
          <div className="bg-primary-white">
            <h2>
              Grievance ID:
            </h2>
            <p>
              {selectedGrievance._id}
            </p>
          </div>
          <div>
            <h2>
              Grievance Description:
            </h2>
            <p>
              {selectedGrievance.description}
            </p>
          </div>
          <div>
            <h2>
              Set Status:
            </h2>
              <select name="status" id="status"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
          </div>
          <button disabled={status === selectedGrievance.status} className="cursor-pointer flex gap-1 bg-button-primary px-4 py-2 text-lg font-semibold items-center bg-button-secondary text-primary-white rounded-lg" onClick={handleSubmit}>Submit</button>
        </form>
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
