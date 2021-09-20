import React from 'react';

import "../../App.css";

const Newsletter = () => {
    const style = {
            padding: '12px 20px',
            margin: '9px 0',
            boxSizing: 'border-box',
            borderRadius: '5px',
            outline: 'none',
            width: '40%',
            height:'22%',
            border: '1px solid #7c7b7b'
    }
    return (
            <section style={{background: '#B00217'}} className="text-center p-5 mt-4">
                <div className="container p-3">
                    <h1 className="text-light">JOIN OUR NEWSLETTER</h1>
                    <p className="text-light">Subscribe to our newsletter for up to date information on our activities & events</p>
                    <form action="#" method="Post">
                        <input type="text" style={style} className='newsletter' name="text" placeholder="Enter Your Email Address" />
                        <button type="button" className="ml-2 mb-1 btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
        )
}

export default Newsletter;
