import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hero extends Component {
    render() {
        return (
            <div>
                <section id="hero" className="d-flex align-items-center">
                    <div className="container-fluid" data-aos="zoom-out" data-aos-delay={100}>
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="row">
                                    <div className="col-xl-7">
                                        <h1> The Olutobi Nathaniel Oduyale Foundation (ONOF), A legacy of service to Community
                                             and God.
                                        </h1>
                                        <Link to="/about" className="btn-get-started scrollto">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
