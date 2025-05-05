import React from 'react'
import GrievanceGatewayTopbar from '../components/GrievanceGatewayTopbar'
import GrievanceForm from '../components/GrievanceForm'
import GrievancePanelFooter from '../components/GrievancePanelFooter'

function SubmitGrievancePanel() {
    return (
        <div>
            <GrievanceGatewayTopbar/>
            <GrievanceForm/>
            <GrievancePanelFooter/>
        </div>
    )
}

export default SubmitGrievancePanel