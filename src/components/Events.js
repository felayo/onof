import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Events extends Component {
    render() {
        return (
            <div>
                <main id="main">
                   <section class="breadcrumbs">
                        <div class="container">

                            <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Events</li>
                            </ol>
                            <h2>Events</h2>

                        </div>
                    </section>
                    <section  id="tabs" class="tabs">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title pb-2">
                                <h2>Events</h2>
                            </div>
                         <div>
                            {/*<ul className="nav nav-tabs row d-flex">
                                <li className="nav-item col-3">
                                <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                                    <i className="ri-gps-line" />
                                    <h4 className="d-none d-lg-block">Book Launch</h4>
                                </a>
                                </li>
                                <li className="nav-item col-3">
                                <a className="nav-link" data-toggle="tab" href="#tab-2">
                                    <i className="ri-body-scan-line" />
                                    <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
                                </a>
                                </li>
                                <li className="nav-item col-3">
                                <a className="nav-link" data-toggle="tab" href="#tab-3">
                                    <i className="ri-sun-line" />
                                    <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
                                </a>
                                </li>
                                <li className="nav-item col-3">
                                <a className="nav-link" data-toggle="tab" href="#tab-4">
                                    <i className="ri-store-line" />
                                    <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
                                </a>
                                </li>
                            </ul>*/}
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                                    <h3>ONOF Presents Public Presentation &  Launch of the Book</h3>
                                    <p className="font-italic">
                                        TOBI ODUYALE A LEGACY OF SERVICE TO COMMUNITY AND GOD 
                                        (2000 - 2013)
                                    </p>
                                    
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Venue: Lagos Sheraton Hotels & Towers Ikeja</li>
                                        <li><i className="ri-check-double-line" /> Date: Sunday May 22nd 2016</li>
                                    </ul>
                                    <p>
                                        The Book is a compilation of some of the things that we that is I and the many people
                                         that I have had the privilege of working with over the years in our service to our 
                                         community were able to accomplish.
                                    </p>
                                    </div>
                                    <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                                    <img src="assets/img/events/book_launch.jpg" alt="book launch" className="img-fluid" />
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="ri-check-double-line" /> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src="assets/img/tabs-2.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="ri-check-double-line" /> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                    </ul>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src="assets/img/tabs-3.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src="assets/img/tabs-4.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
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
