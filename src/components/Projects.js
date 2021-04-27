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
                                            this incident as you can image was such a devastation on this bright young and sprightly lady.
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
                                            Now she well adapted and fit for free movement on her artificial limb. 
                                            We are very confident she is poised to face challenges of normal life.
                                        </p>
                                        <p>
                                            ONOF by so doing started & completed the Aisha Quadri project as was defined.
                                        </p>
                                    </div>
                                    </article>
                                </div>
                                <div className="col-lg-5">
                                    <div className="entry-img">
                                        <img src="assets/img/projects/aisha_1.jpg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                             <h2 className="entry-title">
                                <a href="#">Other List of ONOF Interventions</a>
                            </h2>
                            <div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">SN</th>
                                        <th scope="col">Beneficiary</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>SONARIWO SARAH REMILEKUN</td>
                                        <td>BUSINESS EMPOWERMENT </td>
                                        <td>Jun-16</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>ST BARNABAS ANGLICAN PRIMARY SCHOOL, ILISAN </td>
                                        <td>DONATION OF MODERN BLOCK OF THREE (3) CLASSSROOMS</td>
                                        <td>Jun-17</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                        <td>ONWURAH UGOCHUKWU</td>
                                        <td>PAYMENT OF HOSPITAL BILLS</td>
                                        <td>Sep-18</td>
                                        </tr>
                                         <tr>
                                        <th scope="row">4</th>
                                        <td>ADEOLA AWOTUBO</td>
                                        <td>EDUCATION SCHOLARSHIP </td>
                                        <td>Sep-19</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">5</th>
                                        <td>ODUNAYO FAROYE</td>
                                        <td>PART PAYMENT OF HIP SURGERY EXPENSES</td>
                                        <td>Aug-20</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">6</th>
                                        <td>TITILAYO AMOKE SOTOYE</td>
                                        <td>ASSISTANCE WITH DAUGHTER'S UNIVERSITY FINAL YEAR PROJECT EXPENSES</td>
                                        <td>Sep-20</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">7</th>
                                        <td>MATHILDA UMIAH</td>
                                        <td>ASSISTANCE WITH HOSPITAL BILL PAYMENT</td>
                                        <td>Sep-20</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">8</th>
                                        <td>FEDERAL MEDICAL CENTRE EBUTE META</td>
                                        <td>FINANCIAL ASSISTANCE TO INDIGENT PATIENT</td>
                                        <td>Dec-20</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">9</th>
                                        <td>BUKOLA ADEDEJI</td>
                                        <td>BUSINESS EMPOWERMENT </td>
                                        <td>Sep-20</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">10</th>
                                        <td>OLA VICTORIA</td>
                                        <td>MEDICAL EXPENSES SUPPORT</td>
                                        <td>Mar-21</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">11</th>
                                        <td>OGUNBANWO OLUFUNMILAYO</td>
                                        <td>EDUCATION SCHOLARSHIP @ N300,000 PER YEAR</td>
                                        <td>Jan-21</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>    
                    </section>
                </main>
            </div>
        )
    }
}
