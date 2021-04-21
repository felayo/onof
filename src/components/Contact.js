import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Contact extends Component {
 
    render() {
        return (
            <div>
                <main id="main">
                   <section class="breadcrumbs">
                        <div class="container">

                            <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                            </ol>
                            <h2>Contact</h2>

                        </div>
                    </section>
                    <section id="contact" className="contact">
                        <div className="container" data-aos="fade-up">
                            <div>
                                <div className="section-title">
                                    <h2>Contact</h2>
                                    <p>ONOF  Office Location is in the heart of Lagos Mainland <a href="https://www.google.com/maps/place/Winelight+Analytical+Systems+Limited/@6.5574553,3.3687273,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8d8517764327:0x9dceac9152ab09fd!8m2!3d6.5579042!4d3.3709608" target="_blank">See address below </a></p>
                                </div>
                                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="info-box">
                                            <i className="bx bx-map" />
                                            <h3>Our Address</h3>
                                            <p>3, Adebayo Mokuolu Street, by Hotel Newcastle Anthony Village, Lagos Nigeria</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-envelope" />
                                            <h3>Email Us</h3>
                                            <p>onof.foundation@gmail.com</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-phone-call" />
                                            <h3>Call Us</h3>
                                            <p>+ 234 802 290 1866</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-row">
                                        <div className="col form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                        <div className="col form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate" />
                                        </div>
                                        <div className="form-group">
                                        <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                                        <div className="validate" />
                                        </div>
                                        <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </section>
                </main>
            </div>
        )
    }
}
