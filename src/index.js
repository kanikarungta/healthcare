import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Footer = () => (
  <footer className="footer footer-copyright text-center">
    <a href="https://www.3ds.com/" target="_blank" rel="noopener noreferrer"> Dassault Systèmes</a> acquires
    <a href="https://www.medidata.com/" target="_blank" rel="noopener noreferrer"> Medidata</a><br/>
    © 2020 Copyright  
  </footer>
)


ReactDOM.render(
  [<App key="1"/>, <Footer key="2" />],
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
