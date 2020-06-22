import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { logout } from './actions'
import User_profile from './../images/user_profile.png'
import MaterialTable from 'material-table'
import  BillTable from './billTable.jsx'

class Pharmacist extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {
            data: props.patientDetails
        }
    }

    render () {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <section className='col-sm-2 leftNav'>
                        <div style={{textAlign:'center'}}>
                            <img src={User_profile} alt='user_profile' className='user_photo'/>
                            <div className='doctorTitle'>Hi {this.props.email}</div>
                        </div>
                        
                        <button type="button" className="btn btn-primary logout_patient" onClick={()=>this.props.logout()}>Logout</button>
                    </section> 
                    <article className='patientData col-sm-10'>
                        <MaterialTable
                            title="Patients Record"
                            columns={this.props.columns}
                            data={this.state.data}
                            detailPanel={(rowData) => {
                                return (
                                    <BillTable {...this.props} rowData={rowData} />
                                )
                              }}
                        />
                    </article>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        patientDetails: state.patientDetails,
        columns: state.pharmacistColumns,
        prescriptionColumns: state.prescriptionColumns,
        costOfMedicines: state.costOfMedicines
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=> dispatch (logout())
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Pharmacist)
