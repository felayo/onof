import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import $ from 'jquery';


class Header extends Component {
  componentDidMount() {
    const script = document.createElement("script");

        script.src = `assets/js/main.js`;
        script.async = true;

        document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10 d-flex align-items-center">   
                 <Link to="/" className="logo mr-auto"><img src="assets/img/ONOF_logo.jpg" alt="onof logo" /></Link>
                <nav className="nav-menu d-none d-lg-block">
                  <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li className="drop-down"><a href="#">Partnership</a>
                      <ul>
                        <li><a href="https://www.winelightanalytical.com/" target="_blank">Winelight</a></li>
                        <li><a href="#">Bisbod Ventures</a></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact us</Link></li>
                  </ul>
                </nav>
                {/*<Link to="/" className="get-started-btn scrollto">Donate now</Link> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
