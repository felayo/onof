import React, { Component } from 'react'

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <section id="testimonials" className="testimonials">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                        <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                        <div className="col-xl-10">
                            <div className="owl-carousel testimonials-carousel">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src="assets/img/team/team-1.jpg" className="testimonial-img" alt="testifier" />
                                <h3>Ayorinde</h3>
                                <h4>Commissioner of Education, Lagos</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                    Let me use the opportunity to thank my dear Brother Olutobi Nathaniel, he's done a fantastic job to put all this together
                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                </p>
                                </div>
                            </div>
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src="assets/img/team/oliver.jpg" className="testimonial-img" alt="testifier" />
                                <h3>Apostle Oliver</h3>
                                <h4>Designer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                    Let me use the opportunity to thank my dear Brother Olutobi Nathaniel, he's done a fantastic job to put all this together
                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                </p>
                                </div>
                            </div>
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src="assets/img/team/team-1.jpg" className="testimonial-img" alt="testifier" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                    Let me use the opportunity to thank my dear Brother Olutobi Nathaniel, he's done a fantastic job to put all this together
                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                </p>
                                </div>
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
