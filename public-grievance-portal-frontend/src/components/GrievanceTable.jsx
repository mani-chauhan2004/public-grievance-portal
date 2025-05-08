import { Eye, Edit, Download } from "lucide-react";

const grievances = [
  {
    id: "#GR-2025-001",
    subject: "Road Maintenance Issue",
    department: "Public Works",
    status: "Pending",
  },
  {
    id: "#GR-2025-002",
    subject: "Hospital Services Complaint",
    department: "Healthcare",
    status: "In Progress",
  },
  {
    id: "#GR-2025-001",
    subject: "Road Maintenance Issue",
    department: "Public Works",
    status: "Pending",
  },
  {
    id: "#GR-2025-002",
    subject: "Hospital Services Complaint",
    department: "Healthcare",
    status: "In Progress",
  },
  {
    id: "#GR-2025-001",
    subject: "Road Maintenance Issue",
    department: "Public Works",
    status: "Pending",
  },
  {
    id: "#GR-2025-002",
    subject: "Hospital Services Complaint",
    department: "Healthcare",
    status: "In Progress",
  },
];

export default function GrievanceTable() {
  return (
    <div className="bg-primary-primary-white rounded-xl p-6 mt-8 shadow">
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
            <th className="py-2 px-3">Department (AI)</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((g, i) => (
            <tr key={i} className="border-b">
              <td className="px-3 py-2">{g.id}</td>
              <td className="px-3 py-2">{g.subject}</td>
              <td className="px-3 py-2">{g.department}</td>
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
                <Edit size={16} className="cursor-pointer text-font-normal" />
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
