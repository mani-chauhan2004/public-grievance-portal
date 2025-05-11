import { Landmark, CircleUserRound, LogOut } from "lucide-react";
import api from "../apis/authApi";
import { useNavigate } from "react-router";
export default function Topbar({name = "DashBoard", user= "No User"}) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const res = await api.post("/auth/logout");
            navigate('/login');
            localStorage.removeItem('user');
            localStorage.removeItem('token');

        }catch(error) {
            console.log(error);
        }
    }

    return (
        <header className="w-full bg-primary-white p-4 shadow flex justify-between items-center px-24">
            <div className="flex items-center gap-1">
                <Landmark size={32} strokeWidth={3} />
                <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex items-center gap-3">
                <CircleUserRound size={32} />
                <span className="text-lg text-font-normal font-semibold">{user}</span>
                <button className="cursor-pointer flex gap-1 bg-button-primary px-4 py-2 text-lg font-semibold items-center bg-button-secondary text-primary-white rounded-lg" onClick={handleLogout}><LogOut className="text-primary-white" size={20} strokeWidth={3}/>Logout</button>
            </div>
        </header>
    );
}
  