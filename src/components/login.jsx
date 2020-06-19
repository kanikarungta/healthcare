import React, { Component } from 'react'
import autoBind from 'react-autobind'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Doctor from './doctor.jsx'
import { credentials } from '../shared/credentials'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

// function PrivateRoute ({component: Component, ...rest}) {
//     console.log('are you even working')
//     return (
//         <Route
//         {...rest}
//         render={(props) => <Component {...props} />}      
//       />
      
//     )
//   }

class Login extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {
            errorMsg: null,
            email: '',
            password: '',
            isAuth: false,
            designation: ''
        }
    }

    handleClick = () => {
        let loggedInUserDetails = credentials.filter(eachUser=>eachUser.email===this.state.email && eachUser.password===this.state.password)
        console.log(loggedInUserDetails)
        if (loggedInUserDetails.length === 0 ) {
            this.setState({errorMsg:'Please enter valid credentials', email: '', password: '', isAuth: false})
        }
        else {
            this.setState({ isAuth: true, designation: loggedInUserDetails[0]['designation']})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value || null})
    }

    shouldComponentUpdate (np, ns) {
        return ns!== this.state
    }

    render () {
        // console.log(this.state)
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
                                    <Button className='submit-button' onClick={()=> this.handleClick()}>Submit</Button>
                                    <div className='text-danger mt-3'>{this.state.errorMsg}</div>
                                </fieldset>
                            </Form>
                            {/* {this.state.isAuth ? <PrivateRoute path='/doctor' component={Doctor} />: '' } */}
                            {this.state.isAuth ? <Redirect to={'/'+this.state.designation} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login