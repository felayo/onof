import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <main id="main">
                   <section class="breadcrumbs">
                        <div class="container">

                            <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Projects</li>
                            </ol>
                            <h2>Projects</h2>

                        </div>
                    </section>
                    <section>
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-7 entries">
                                    <article className="entry">
                                        <h2 className="entry-title">
                                            <a href="#">Miss Aisha Quadri Artificial limb procurement Project</a>
                                        </h2>
                                        
                                        <div className="entry-content">
                                            <p>
                                                As part of ONOF interventions, Miss Aisha Quadri an SS3 student of Sagamu High School, Sagamu, 
                                                Ogun State who was involved in a collapsed building accident in 2015 which resulted in a loss of a limb, 
                                                this incident as you can imagine was such a devastation on this bright young and sprightly lady.
                                            </p>
                                            <p>
                                                Miss Quadri case was taken up by ONOF and she has gone through various 
                                                medical attention and procedure at different specialist hospitals both in Lagos and 
                                                Abuja at different times.
                                            </p>
                                            <p>
                                                In February 2020, she took a final of a series of physiotherapy and clearance on her prosthetic limb.
                                            </p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img src="assets/img/projects/aisha_2.jpg" className="img-thumbnail" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="assets/img/projects/aisha_7.jpg" className="img-thumbnail" />
                                                </div>
                                            </div>
                                            <p>
                                                Now she is well adapted and fit for free movement on her artificial limb. 
                                                We are very confident she is poised to face challenges of normal life.
                                            </p>
                                            <p>
                                                ONOF by so doing started & completed the Aisha Quadri project as was defined.
                                            </p>
                                        </div>

                                    </article>
                                </div>
                                <div className="col-lg-5 ">
                                    <div className="entry-img mt-5">
                                        <img src="assets/img/projects/aisha_1.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <article className="entry">
                                        <div className="p-3 mb-3 mt-3" style={{'backgroundColor': "#e03a3c", 'color': "#ffffff"}}>
                                            <h4>Commissioning of a Block of 3 Classroom At St. Barnabas Anglican Primary School, Ilisan</h4>
                                        </div>
                                        <div className="entry-content">
                                            <p className="text-justify">
                                                To the glory of God, a block of 3 classroom was donated by 
                                                Oluwatobi Nathaniel Oduyale Foundation(ONOF) to
                                                St. Barnabas Anglican Primary School, Ilisan - Remo
                                                and Commissioned by Hon. Commissioner for Education, Science and Technology
                                                Prof. Abayomi Adelaja Arigbabu (FMAN) on 18th of October, 2021
                                            </p>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <img src="assets/img/projects/commissioner.jpeg" className="img-thumbnail" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="assets/img/projects/sch_2.jpeg" className="img-thumbnail" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="assets/img/projects/oba.jpeg" className="img-thumbnail" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="assets/img/projects/sch_1.jpeg" className="img-thumbnail" />
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </article>
                                </div>
                                <div className="col-lg-4">
                                    <div className="entry-img">
                                        <div class="caption mt-4">
                                            <p><span className="text-danger">ONOF</span> assisted MR. Fatai; A passionate appeal to support a kidney transplant for Mr. Fatai</p>
                                        </div>
                                        <img src="assets/img/projects/proj.jpeg" className="img-thumbnail mt-0"/>
                                    </div>
                                </div>
                            </div>

                        <hr />

                        <div className="row">
                            <div className="col-lg-4">
                                 <h2 className="entry-title">
                                    <a href="#">WE SUPPORT</a>
                                </h2>
                                <ul>
                                    <li>The needy</li>
                                    <li>Widows</li>
                                    <li>Orphans/ Orphanages</li>
                                    <li>Scholarships</li>
                                    <li>Hospital bills</li>
                                    <li>Community bore holes</li>
                                    <li>The elderly </li>
                                    <li>SMMe</li>
                                    <li>Accident victims</li>
                                </ul>
                                <p>
                                    Our goal is touching lives… SUPPORT US
                                </p>
                            </div>
                            
                        </div>
                        </div>    
                    </section>
                </main>
            </div>
        )
    }
}
