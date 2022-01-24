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
                        <div class="row" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-book">Book Launch</li>
                                <li data-filter=".filter-aisha">Aisha</li>
                                <li data-filter=".filter-school">Block of 3 Classroom</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-book">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_11.jpg" className="img-fluid" alt="Book launch" />
                            <div className="portfolio-info">
                                <h4>Book Launch</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/pro_11.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>                                
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-book">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_12.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>Book Launch</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/pro_12.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-book">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_13.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>Book Launch</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/pro_13.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-aisha">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_21.jpg" className="img-fluid" alt="Church support" />
                            <div className="portfolio-info">
                                <h4>Aisha</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/pro_21.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-aisha">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_22.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>Aisha</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/pro_22.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-aisha">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/pro_23.jpg" className="img-fluid" alt />
                            <div className="portfolio-info">
                                <h4>Aisha</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/pro_23.jpg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/sch_1.jpeg" className="img-fluid" alt="school_project" />
                            <div className="portfolio-info">
                                <h4>Block of 3 Classroom</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/sch_1.jpeg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/sch_4.jpeg" className="img-fluid" alt="school_project" />
                            <div className="portfolio-info">
                                <h4>Block of 3 Classroom</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/sch_4.jpeg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-school">
                            <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/sch_2.jpeg" className="img-fluid" alt="school_project" />
                            <div className="portfolio-info">
                                <h4>Block of 3 Classroom</h4>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/sch_2.jpeg" data-gall="portfolioGallery" className="venobox" title="click to view"><i className="bx bx-plus" /></a>
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
