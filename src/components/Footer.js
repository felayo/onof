import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>About Us</h4>
                                <p>
                                    OLUTOBI NATHANIEL ODUYALE FOUNDATION knows that our strength lies not only in the words we stand by, 
                                    but most importantly through the actions of our initiatives.
                                    
                                </p>
                                <Link to="/about" className="btn-get-started scrollto">Read more</Link>......
                                
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right" /> <Link to="/">Home</Link></li>
                                <li><i className="bx bx-chevron-right" /> <Link to="about">About us</Link></li>
                                <li><i className="bx bx-chevron-right" /> <Link to="/projects">Projects</Link></li>
                                <li><i className="bx bx-chevron-right" /> <Link to="/events">Events</Link></li>
                                
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Partnership</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="https://www.winelightanalytical.com/" target="_blank">Winelight</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Bisbod Ventures</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Contact<span>.</span></h3>
                                <p>
                                Winelight Analytical Systems Ltd<br />
                                Anthony Village<br />
                                Lagos <br /><br />
                                <strong>Phone:</strong> (+234) 802 290 1866<br />
                                <strong>Email:</strong> onof.foundation@gmail.com <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container d-md-flex py-4">
                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                        © Copyright <strong><span>ONOF</span></strong>. All Rights Reserved
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                    </div>
                </footer>{/* End Footer */}
                <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
            </div>

        )
    }
}
