import { Landmark, CircleUserRound, LogOut } from "lucide-react";


export default function Topbar({name = "DashBoard"}) {
    return (
        <header className="w-full bg-primary-white p-4 shadow flex justify-between items-center px-24">
            <div className="flex items-center gap-1">
                <Landmark size={32} strokeWidth={3} />
                <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex items-center gap-3">
                <CircleUserRound size={32} />
                <span className="text-lg text-font-normal font-semibold">Admin User</span>
                <button className="flex gap-1 bg-button-primary px-4 py-2 text-lg font-semibold items-center text-primary-white rounded-lg"><LogOut className="text-primary-white" size={20} strokeWidth={3} />Logout</button>
            </div>
        </header>
    );
}
  