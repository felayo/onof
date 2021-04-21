import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';
import Testimonial from './Objectives';

export default class About extends Component {
    render() {
        return (
            <div>
                <main id="main">
                   <section class="breadcrumbs">
                        <div class="container">

                            <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>About</li>
                            </ol>
                            <h2>About</h2>

                        </div>
                    </section>
                    <section>
                        <div className="container" data-aos="fade-up">   
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text-justify font-weight-normal">
                                        <div className="section-title pb-1">
                                            <h2>About Us</h2>
                                        </div>
                                        <p>
                                            ONOF  The Olutobi Nathaniel Oduyale Foundation was inaugurated on the 2nd 
                                            of November 2012 to institutionalise the various charity and philanthropic 
                                            interventions which Mr Tobi Oduyale had engaged in on a personal note over 
                                            the years.
                                        </p>
                                        <strong>In his own word</strong>
                                        <p>
                                            “Over the years it has been my privilege to seek to apply the values of 
                                            charity, care and support for the weak to my life and circumstances as the 
                                            good Lord has blessed me and given me the opportunity, in various ways and in 
                                            different circumstances I have been opportune to extend a helping hand to the 
                                            less privileged and to intervene in my own little way in the circumstances of 
                                            people and communities around me who have sought for assistance in one way or 
                                            the other. I firmly believe that we cannot leave the burden of these people and 
                                            communities to government and that well-meaning people should rise up and offer 
                                            support and encouragement to the many around them who are less privileged and 
                                            endowed. It is to this end that I have been inspired to come up with the concept of the 
                                            Olutobi Nathaniel Oduyale Foundation, hereafter referred to as ONOF.” ONOF cares !
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5 pt-5 mt-5" data-aos="fade-up" data-aos-delay={200}>
                                    <img src="assets/img/portfolio/pro_1.jpg" alt="Founder" className="img-fluid img-responsive" />
                                </div>
                            </div>
                        </div>    
                    </section>
                    <Team />
                    <Testimonial />
                </main>
            </div>
        )
    }
}
