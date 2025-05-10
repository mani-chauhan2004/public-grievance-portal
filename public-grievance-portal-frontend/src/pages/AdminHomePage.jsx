import React from 'react'
import { useNavigate } from 'react-router'
function AdminHomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={ () => navigate('dashboard') }>
                Dashboard
            </button>
        </div>
    ) 
}

export default AdminHomePage