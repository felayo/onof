import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        return (
            <div>
                {/* ======= Team Section ======= */}
                <section id="team" className="team section-bg">
                  <div className="container" data-aos="fade-up">
                    <div className="section-title">
                      <h2>Team</h2>
                      <p>At ONOF we have a team of enthusiastic and passionate people who are committed to the ideals embodied 
                          by the foundation. Most of our team members are volunteers from across civil society and they are ably 
                          led by Mr Tobi & Bisola Oduyale co founders of the ONOF dream.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay={100}>
                          <div className="member-img">
                            <img src="assets/img/team/tobi.jpg" className="img-fluid" alt="tobi" />
                            <div className="social">
                              <a href><i className="icofont-twitter" /></a>
                              <a href><i className="icofont-facebook" /></a>
                              <a href><i className="icofont-instagram" /></a>
                              <a href><i className="icofont-linkedin" /></a>
                            </div>
                          </div>
                          <div className="member-info">
                            <h4>Tobi Oduyale</h4>
                            <span>Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay={200}>
                          <div className="member-img">
                            <img src="assets/img/team/bisola.jpg" className="img-fluid" alt="bisola" />
                            <div className="social">
                              <a href><i className="icofont-twitter" /></a>
                              <a href><i className="icofont-facebook" /></a>
                              <a href><i className="icofont-instagram" /></a>
                              <a href><i className="icofont-linkedin" /></a>
                            </div>
                          </div>
                          <div className="member-info">
                            <h4>Bisola ODUYALE</h4>
                            <span>Co Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>{/* End Team Section */}
            </div>
        )
    }
}
