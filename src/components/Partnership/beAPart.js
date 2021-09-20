import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {

    return (
        <main id="main">
            <section class="breadcrumbs">
                <div class="container">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>Partnership</li>
                    </ol>
                    <h2>Be a Part</h2>
                </div>
            </section>

            <section>
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-9 entries">
                            <article className="entry">
                                <h2 className="entry-title text-center">
                                    <a href="#">Be a Part or Join us</a>
                                </h2>
                                
                                <div className="entry-content text-justify">
                                    <p>
                                        As an organization we are committed to uplifting our community, one person at a time, an African
                                        proverb says ‘one tree does not make a forest’ this is why we are passionate about building a forest of
                                        many trees.
                                    </p>
                                    <p>
                                        We envision a body of committed partners across the board spectrum of society who will join hands
                                        with us in providing succor, help and lifting to the very many needy all across our cities.
                                    </p>
                                    <p>
                                        Everybody can contribute in kind and financially, nothing is too much, small or insignificant to make a
                                        difference.
                                    </p>
                                    <p>
                                        Your support will go a long way in helping us reach the many that are slipping through the cracks in our
                                        society.
                                    </p>
                                    <p>
                                        We welcome institutional partners, corporate organizations, religious organizations, individuals and
                                        volunteers.
                                    </p>
                                    <p>
                                        Your support can be a one off donation or a recurring gift, whatever you choose to do, please know that
                                        it will be most appreciated and gratefully received.
                                    </p>
                                    <h3 className="entry-title">
                                        <a href="#">HOW TO GIVE</a>
                                    </h3>
                                    <p>
                                        You can give in a variety of ways, through direct bank transfers or through our online channels.
                                        Prospective volunteers can sign up online or send an email to info@onoffoundation.org
                                    </p>
                                    <h3 className="entry-title">
                                        <a href="#">DIRECT TRANSFER DETAILS</a>
                                    </h3>
                                    <p>
                                        <strong>Name on Account:</strong> Olutobi Nathaniel Oduyale (ONOF) <br />
                                        <strong>Account Number:</strong> 1013247868 <br />
                                        <strong>Account Provider:</strong> Zenith Bank
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>    
            </section>
        </main>
    );
}

export default JoinUs;