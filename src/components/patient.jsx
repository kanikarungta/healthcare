import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { logout  } from './actions'
import User_profile from './../images/user_profile.png'

class Patient extends Component {
    constructor (props) {
        super (props)
        this.state= {

        }
        autoBind(this)
    }

    render () {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <section className='col-sm-3 leftNav'>
                        <img src={User_profile} alt='user_profile' className='user_photo'/>
                        <button type="button" className="btn btn-primary logout_patient" onClick={()=>this.props.logout()}>Logout</button>
                    </section> 
                    <article className='patientData col-sm-9'>
                        <div className='patientTitle'>Welcome {this.props.patient_details.name}</div>
                        <div className='patientPrescription'>
                        <div className='prescriptionHeading'>Here is your prescription -</div>  <br />
                        <ul>
                            {this.props.patient_details.prescription.map(med=>{
                                return <li key={med['medicine']}>{med['medicine']} for {med['days']} days and {med['perDay']} times per day.</li>
                            })}
                        </ul>
                    <div className='nextVisit'>Your next visit is scheduled on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true}).format(new Date(Date.parse(this.props.patient_details.nextVisit)))}.</div> 
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        patient_details: state.patient_details
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=> dispatch (logout())
    }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Patient)
