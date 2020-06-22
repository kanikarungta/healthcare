import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { logout, savePatientDetails  } from './actions'
import User_profile from './../images/user_profile.png'
import MaterialTable from 'material-table'

class Doctor extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {
            data: props.patientDetails
        }
    }
    logout = () => {
        this.props.savePatientDetails(this.state.data)
        this.props.logout()
    }
    render () {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <section className='col-sm-2 leftNav'>
                        <div style={{textAlign:'center'}}>
                            <img src={User_profile} alt='user_profile' className='user_photo'/>
                            <div className='doctorTitle'>Dr. {this.props.email}</div>
                        </div>
                        
                        <button type="button" className="btn btn-primary logout_patient" onClick={()=>this.logout()}>Logout</button>
                    </section> 
                    <article className='patientData col-sm-10'>
                        <MaterialTable
                            title="Patients Record"
                            columns={this.props.columns}
                            data={this.state.data}
                            editable={{
                                onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve()
                                    this.setState((prevState) => {
                                        const data = [...prevState.data]
                                        newData.prescription=[]
                                        data.push(newData)
                                        return { ...prevState, data }
                                    })
                                    }, 600)
                                }),
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve()
                                    if (oldData) {
                                        this.setState((prevState) => {
                                        const data = [...prevState.data]
                                        data[data.indexOf(oldData)] = newData
                                        return { ...prevState, data }
                                        })
                                    }
                                    }, 600)
                                }),
                                onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve()
                                    this.setState((prevState) => {
                                        const data = [...prevState.data]
                                        data.splice(data.indexOf(oldData), 1)
                                        return { ...prevState, data }
                                    })
                                    }, 600)
                                }),
                            }}
                            detailPanel={(rowData) => {
                                return (
                                    <MaterialTable
                                        title='Prescription'
                                        columns={this.props.prescriptionColumns}
                                        data={rowData.prescription}
                                        options={{
                                            paging: false,
                                            search: false
                                          }}
                                        editable={{
                                            onRowAdd: (newData) =>
                                            new Promise((resolve) => {
                                                setTimeout(() => {
                                                resolve()
                                                this.setState((prevState) => {
                                                    const data = [...prevState.data]
                                                    const data2 = data[rowData.tableData.id].prescription
                                                    data2.push(newData)
                                                    data[rowData.tableData.id].prescription = data2
                                                    return { ...prevState, data }
                                                })
                                                }, 600)
                                            }),
                                            onRowUpdate: (newData, oldData) =>
                                            new Promise((resolve) => { 
                                                resolve()                                  
                                                if (oldData) {
                                                    let data = [...this.state.data] 
                                                    this.setState((prevState) => {
                                                        const data2 = data[rowData.tableData.id].prescription
                                                        data2[data2.indexOf(oldData)] = newData
                                                        data[rowData.tableData.id].prescription = data2
                                                        return { ...prevState, data }
                                                    })
                                                }
                                                }),
                                            onRowDelete: (oldData) =>
                                            new Promise((resolve) => {
                                                setTimeout(() => {
                                                resolve()
                                                this.setState((prevState) => {
                                                    const data = [...prevState.data]
                                                    const data2 = data[rowData.tableData.id].prescription
                                                    data2.splice(data2.indexOf(oldData), 1)
                                                    data[rowData.tableData.id].prescription = data2
                                                    return { ...prevState, data }
                                                })
                                                }, 600)
                                            }),
                                        }}
                                    />
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
        columns: state.columns,
        prescriptionColumns: state.prescriptionColumns
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=> dispatch (logout()),
        savePatientDetails: (data)=> dispatch (savePatientDetails(data))

    }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Doctor)