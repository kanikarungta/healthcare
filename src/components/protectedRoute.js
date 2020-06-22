import React from 'react'
import { Redirect } from 'react-router-dom'
import Patient from './patient'
import Pharmacist from './pharmacist'
import Doctor from './doctor'
import { connect } from 'react-redux'

function ProtectedRoute (props) {
    const Component = localStorage.getItem('designation')
    return (  
        Component === 'Doctor' ? (
            <div><Redirect to={{ pathname: '/doctor' }} /><Doctor /></div>) : (
                Component === 'Patient' ? (
                    <div><Redirect to={{ pathname: '/patient' }} /><Patient /></div>) : (
                    Component === 'Pharmacist' ? (<div><Redirect to={{ pathname: '/pharmacist' }} /><Pharmacist /></div> ): <div><Redirect to={{ pathname: '/login' }} /></div>))
    )
        
    }

const mapStateToProps = (state) => {
    return {
       designation: state.designation, isAuth: state.isAuth, patient_details: state.patient_details
    }
 }

 export default connect(mapStateToProps)(ProtectedRoute)
