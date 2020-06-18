import React , { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import Logo from './../images/logo.png'

class NavBar extends Component {
    constructor (props) {
        super (props)
        this.state= {

        }
    }

    render () {
        return (
            <Navbar dark className='row navigationBar'>
                <NavbarBrand href='/'><img src={Logo} alt="logo" width="100px"/></NavbarBrand>
            </Navbar>
            // <div className='row'>
            //     <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            //         <a className="navbar-brand" href="#"><img src="./../images/logo/png" alt="logo" width="100px"/></a>
            //         <button className="navbar-toggler" data-toggle="collapse" data-target="#navigationMenu">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navigationMenu">
            //             <ul className="navbar-nav ml-auto">
            //             <li class="nav-item"><a href="about.html" class="nav-link"><i class="fa fa-user" aria-hidden="true"></i> About Us</a></li>
            //             <li class="nav-item"><a href="contact.html" class="nav-link"><i class="fa fa-envelope" aria-hidden="true"></i> Contact Us</a></li>
            //             </ul>
            //         </div>
            //     </nav>
            // </div>
        )
    }
}

export default NavBar