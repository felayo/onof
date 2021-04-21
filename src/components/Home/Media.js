import React, { Component } from 'react'

export default class Media extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                        <h2>Media</h2>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_1.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>The Church Support</h4>
                                <div className="portfolio-links">
                                <a href="assets/img/portfolio/pro_1.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_2.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>Book Launch</h4>
                                <div className="portfolio-links">
                                <a href="assets/img/portfolio/pro_2.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_3.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>Aisha</h4>
                                <div className="portfolio-links">
                                <a href="assets/img/portfolio/pro_3.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>{/* End Portfolio Section */}
            </div>
        )
    }
}
