import React, { Component } from 'react'

export default class Testimonial extends Component {
    render() {
        return (
            <div>
                {/* ======= Testimonials Section ======= */}
                <section>
                  <div className="container" data-aos="fade-up">
                    <div className="section-title pb-1">
                      <h2>STRATEGIC OBJECTIVES</h2>
                    </div>
                      <p className="text-justify">
                        <ol>
                          <li>The Olutobi Nathaniel Oduyale Foundation shall be a non-profit organization set up
                              for the express purpose of providing philanthropic and charitable support to 
                              vulnerable members of our society, so defined as:
                              <ul>
                                <li>The widowed</li>
                                <li>The elderly, particularly those who are without any support around them.</li>
                                <li>Those needing medical intervention or are unable to meet the cost of medical help</li>
                                <li>The young, brilliant but indigent person who is unable to find help or sponsorship for educational activities.</li>
                                <li>Those with an interest in obtaining life skills and vocational training and need assistance to do so.</li>
                              </ul>
                          </li>
                          <br />
                          <li>ONOF shall also provide critical strategic intervention in communities in critical 
                              areas such as provision of portable water. etc <br /><strong>ONOF VALUES (C.E.M.I)</strong> The acronym C.E.M.I 
                              represents the core values which ONOF will internalize in its operations: <br />
                              <b>C:</b> Compassion and empathy in its dealings with the less privileged.<br />
                              <b>E:</b> Excellence in its service and project delivery. <br />
                              <b>M:</b> Morality and faith in its activities <br />
                              <b>I:</b> Integrity and probity in its operations
                          </li>
                        </ol>
                        
                      </p>
                    <div className="section-title pb-1 pt-4">
                      <h2>RATIONAL FOR EXISTENCE</h2>
                    </div>
                    <p className="text-justify">
                      ONOF shall be a vehicle to institutionalize and create a structure to the practice of 
                      charity and philanthropy, which I have actively pursued in my personal capacity. 
                      ONOF shall also expand and diversify the scope, frequency and magnitude of our support activities. 
                      ONOF shall also be a platform that my well-meaning friends, associates and partners can use to 
                      engage in the praise worthy practice of charity and philanthropy in an organized and structure manner.
                    </p>
                  </div>
                </section>
            </div>
        )
    }
}
