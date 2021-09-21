import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Event extends Component {
    render() {
        return (
            <div className="pt-5">
                <div className="container" data-aos="fade-up">
                    
                    <div className="row no-gutters">
                        <div className="col-lg-7">
                            <div className="entry-img">
                                <img src="assets/img/events/book_launch.jpg" alt className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-5 entries pt-5 pl-4 pr-4" style={{background: "#54595F", color: "#fff"}}>
                            <h5 className="pt-2">Book Presentation & Launch of the Book</h5>
                            <p className="font-italic" style={{fontSize: "13px"}}>
                                TOBI ODUYALE A LEGACY OF SERVICE TO COMMUNITY AND GOD 
                                (2000 - 2013)
                            </p>
                            
                            <ul>
                                <li><i className="ri-check-double-line" /> Venue: Lagos Sheraton Hotels & Towers Ikeja</li>
                                <li><i className="ri-check-double-line" /> Date: Sunday May 22nd 2016</li>
                            </ul>
                            <p className="text-justify">
                                The Book is a compilation of some of the things that we that is I and the many people
                                    that I have had the privilege of working with over the years in our service to our 
                                    community were able to accomplish.
                            </p>
                            <Link to="/events" className="get-started-btn mt-4">Learn more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
