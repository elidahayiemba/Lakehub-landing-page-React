import React, {Component} from "react";
import './lakebasin.css'



export default class LakeBasin extends Component{
    render(){
        return(
            <div>
                <section>
                  <div className="content2">
                    <div className="basin1">
                    <img src= {process.env.PUBLIC_URL+"images/lake basin.png"} alt="logo" width="150px" />
                    </div>
                    
                        <div className="basin2">
                           <h2>The Lake Basin Investment &<br></br> Innovation week (LBIIW)</h2>
                         </div>
                         <div className="basin3">
                            <p>
                            LakeHub, Winam Capital & Fablab Winam convenes the LBIIW is an annual<br></br> entrepreneurship and 
                            innovation gathering that convenes entrepreneurs, innovators,<br></br> investors, policymakers, government, 
                            development agencies and other ecosystem <br></br>players; to spur economic growth of the Lake Victoria Basin, 
                            through innovative<br></br> business models, digitization, SME financing and local manufacturing.
                          </p>
                         </div>
                         <div className="basin4">
                            <button><a href="#">Partner With Us</a></button>
                            <a href="#"><span>Learn More</span></a>

                         </div>
                     </div>
                        
                </section>
            </div>
        )
    }
}