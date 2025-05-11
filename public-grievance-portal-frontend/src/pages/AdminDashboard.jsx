import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import { MessageCircle, AlertTriangle, ShieldCheck, ChartNoAxesCombined, Copyright } from "lucide-react";
import GrievanceTable from "../components/GrievanceTable";
import { useState, useEffect } from "react";
import api from "../apis/authApi";

export default function AdminDashboard() {

  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/grievance/all");
        console.log(res.data);
        setGrievances(res.data);
        
      } catch (error) {
        console.log(error?.message || "Error in getting grievance data");
      }
    };

    fetchData();
  }, []);
  let pendingCount = 0, resolvedCount = 0;
  grievances.map(g => {
    if(g.status === 'pending') {
      pendingCount++;
    }
    else if(g.status === 'resolved') {
      resolvedCount++;
    }
  })

  return (
    <div className="flex min-h-screen bg-primary-gray">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Topbar name={"Samadhan Admin"} user={"Admin"}/>
        <main className="py-6 px-24 grid gap-6 md:grid-cols-4">
          <StatCard title="Total Grievances" value={grievances.length} icon={MessageCircle} color="yellow" />
          <StatCard title="Pending Grievances" value={pendingCount} icon={AlertTriangle} color="red" />
          <StatCard title="Resolved Grievances" value={resolvedCount} icon={ShieldCheck} color="green" />
          <StatCard title="Accuracy" value={`${((resolvedCount / (resolvedCount + pendingCount)) * 100).toString().slice(0, 5)}%`}  icon={ChartNoAxesCombined} color="blue" />
        </main>
        <div className="px-24">
            <GrievanceTable grievances={grievances} user={"Admin"}/>
        </div>
        <footer className="flex items-center gap-1 justify-center mt-4">
            <Copyright size={16} /> 2025 Grievance Gateway Admin Portal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
