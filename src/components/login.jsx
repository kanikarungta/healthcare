import React, { Component } from 'react'
import autoBind from 'react-autobind'
import {Redirect} from 'react-router-dom'
// import { credentials } from '../shared/data'
import { connect } from 'react-redux'
import { loginDetails } from './actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Login extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {
            errorMsg: null,
            email: '',
            password: '',
            designation: '',
            validEmail: false
        }
    }

    handleLogin = () => {
        let loggedInUserDetails = this.props.credentials.filter(eachUser=>eachUser.email===this.state.email && eachUser.password===this.state.password)
        if (loggedInUserDetails.length === 0 ) {
            this.setState({errorMsg:'Please enter valid credentials', email: '', password: ''})
        }
        else {
            let userDetails = loggedInUserDetails[0] 
            localStorage.setItem('designation' , userDetails['designation'])
            this.setState({ designation: userDetails['designation']})
            this.props.loginDetails({...userDetails, isAuth: true})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value || ''})
    }

    validateEmail () {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            this.setState({validEmail: true,  errorMsg:''})
        }
        else {
            this.setState({validEmail: false,  errorMsg:'Please enter valid email'})
        }   
    }

    shouldComponentUpdate (np, ns) {
        return ns!== this.state
    }

    render () {
        return (
            <div>  
                <div className='container-fluid'>
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                        <Form >
                            <fieldset className='my-fieldset'>
                                <legend className='login-legend'>Login</legend>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            onChange={(e)=>{this.handleChange(e)}}
                                            onBlur={()=>this.validateEmail()}
                                            value={this.state.email}
                                            placeholder="kanika.rungta@3ds.com"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={(e)=>{this.handleChange(e)}}
                                            value={this.state.password}
                                            placeholder="password"
                                        />
                                    </FormGroup>
                                    <Button className='submit-button' disabled={!this.state.validEmail} onClick={()=> this.handleLogin()}>Submit</Button>
                                    <div className='text-danger mt-3'>{this.state.errorMsg}</div>
                                </fieldset>
                            </Form>
                            {this.props.isAuth ? <Redirect to={'/'+this.state.designation} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        credentials: state.credentials,
        isAuth: state.isAuth
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
       loginDetails: (loggedInUserDetails) => dispatch(loginDetails(loggedInUserDetails))
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Login)