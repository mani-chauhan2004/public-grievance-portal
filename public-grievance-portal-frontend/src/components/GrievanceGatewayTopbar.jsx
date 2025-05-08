import React from 'react'
import { Landmark, CircleUserRound, LogOut, ChartNoAxesCombined, CircleHelp } from "lucide-react";
function GrievanceGatewayTopbar() {
    return (
        <header className="w-full bg-primary-white p-4 shadow flex justify-between items-center px-24">
            <div className="flex items-center gap-1">
                <Landmark size={32} strokeWidth={3} />
                <h2 className="text-xl font-semibold">Grievance Gateway</h2>
            </div>
            <div className="flex items-center gap-6">
                <span className='flex items-center text-lg font-semibold text-font-secondary gap-1'>
                    <ChartNoAxesCombined size={32}/>
                    <p>Progress Tracker</p>
                </span>
                <span className='flex items-center text-lg font-semibold text-font-secondary gap-1'>
                    <CircleHelp className="bg-font-secondary rounded-full text-white" size={32} />
                    <p>Help & Support</p>
                </span>
            </div>
        </header>
    )
}

export default GrievanceGatewayTopbar