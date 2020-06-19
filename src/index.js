import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './images/logo.png'
import './index.css';
import App from './App';
import {Navbar, NavbarBrand} from 'reactstrap'
import * as serviceWorker from './serviceWorker';

const NavBar = () => (
  <Navbar dark className='navigationBar'>
    <NavbarBrand href='/'><img src={Logo} alt="logo" width="100px"/></NavbarBrand>
  </Navbar>
)

const Footer = () => (
  <footer className="footer footer-copyright text-center">
    <a href="https://www.3ds.com/" target="_blank" rel="noopener noreferrer"> Dassault Systèmes</a> acquires
    <a href="https://www.medidata.com/" target="_blank" rel="noopener noreferrer"> Medidata</a><br/>
    © 2020 Copyright  
  </footer>
)


ReactDOM.render(
  [<NavBar key="1"/>,<App key="2"/>, <Footer key="3" />],
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
