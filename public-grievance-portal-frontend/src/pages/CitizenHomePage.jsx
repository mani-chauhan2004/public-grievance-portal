import React from 'react'
import { useNavigate, Link } from "react-router-dom";
function CitizenHomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={ () => navigate('dashboard') }>
                Dashboard
            </button>
            <button onClick={ () => navigate('submit-grievance') }>
                Submit Grievance
            </button>
        </div>
    )
}

export default CitizenHomePage;