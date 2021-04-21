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
                            Work in progress
                        </div>    
                    </section>
                </main>
            </div>
        )
    }
}
