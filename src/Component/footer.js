import React, {Component} from "react";
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";



export default class Footer extends Component{
    render(){
        return(
            <div>
                <section>
                    <footer>
                    <div className="lakehub">
                    <img src={process.env.PUBLIC_URL+"images/Logo.png"} alt="none" width="200px"></img>
                    </div>
                  
                  <div className="game">
                    
                    <p>LakeHub is a growing community of creatives,<br></br> 
                    programmers, hackers, designers & entrepreneurs</p>
                    <p>We learn, share, collaborate and have fun everyday. 
                    </p>
                    </div>

                    <hr></hr>
                    
                    <div className="game2">
                     
                     <p>© Copyright 2021 Elidah Ayiemba. All rights reserved.</p>
                    <div className="Social">
                    <a href="https://github.com/elidahayiemba"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/eddy.capron.77"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com/ayiemba_elidah" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/ayiemba_elidah/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </div>
                    </div>
                  
            

            

                    </footer>
                    
                </section>
            </div>
        )
    }
}