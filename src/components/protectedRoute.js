import React from 'react'
import { Redirect } from 'react-router-dom'
import Patient from './patient'
import Pharmacist from './pharmacist'
import Doctor from './doctor'

class ProtectedRoute extends React.Component {
    constructor (props) {
        super (props)
    }

    render() {
        const Component = localStorage.getItem('designation')
        return Component === 'Doctor' ? (
            <div><Redirect to={{ pathname: '/doctor' }} /><Doctor {...this.props}/></div>) : (
                Component === 'Patient' ? (
                    <div><Redirect to={{ pathname: '/patient' }} /><Patient {...this.props}/></div>) : (
                    Component === 'Pharmacist' ? (<div><Redirect to={{ pathname: '/pharmacist' }} /><Pharmacist {...this.props}/></div> ): <div><Redirect to={{ pathname: '/login' }} /></div>))
    }
}

export default ProtectedRoute