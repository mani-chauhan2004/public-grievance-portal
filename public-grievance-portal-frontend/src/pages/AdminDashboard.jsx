import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import { MessageCircle, AlertTriangle, ShieldCheck, ChartNoAxesCombined, Copyright } from "lucide-react";
import GrievanceTable from "../components/GrievanceTable";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Topbar />
        <main className="py-6 px-24 grid gap-6 md:grid-cols-4">
          <StatCard title="Total Grievances" value="1543" icon={MessageCircle} color="yellow" />
          <StatCard title="Pending Grievances" value="273" icon={AlertTriangle} color="red" />
          <StatCard title="Resolved Grievances" value="1270" icon={ShieldCheck} color="green" />
          <StatCard title="Accuracy" value="82%" icon={ChartNoAxesCombined} color="blue" />
        </main>
        <div className="px-24">
            <GrievanceTable/>
        </div>
        <footer className="flex items-center gap-1 justify-center mt-4">
            <Copyright size={16} /> 2025 Grievance Gateway Admin Portal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
