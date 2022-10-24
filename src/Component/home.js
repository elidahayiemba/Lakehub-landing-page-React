import React, { Component } from 'react'
import './home.css'




export default class Home extends Component {
    render() {
    return (
        <div>
            <section className="container">
            <div>
                <div className="logo">
                <img src={process.env.PUBLIC_URL+"images/Logo.png"} alt="none" width="200px" />

                </div>              
                    <div className="main">
                        <div className="heading">
                            <h1>We're decentralizing<br></br>
                                <span> access to technlogy</span></h1>

                                <p>
                                    Lakehub is a growing community of creatives, programmers,<br></br>
                                    hackers, designers & enterpreneurs. We learn, share, collaborate<br></br>
                                    and have fun everyday.
                                </p>
                                <div className="button">
                                    <button className="btn1">Get Started</button>
                                    <button className="btn2"><a href="https://www.facebook.com/eddy.capron.77">Join Our Community</a></button>

                                </div>

                        </div>
                        <div className="stand">
                        <img src={process.env.PUBLIC_URL+"images/image 1.png"} alt="none" height="400px"/>
                        </div>
                    </div>         
                </div>
            </section>
        </div>




    )
    
    
  }
}