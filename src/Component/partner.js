import React, { Component } from "react";
import './partner.css'

export default class Partner extends Component{
    render(){
        return(
            <div>
                <section>
                <div className="part">
                    <h1>Our Partners</h1>
                </div>
                <div className="mypartners">
                    <table>
                    <tr>
                        <div className="t1">
                        <td><img src= {process.env.PUBLIC_URL+"images/planet.jpg"} alt="logo" width="200px" /></td>
                        <td><img src={process.env.PUBLIC_URL+"images/segal.png"} alt="logo"  width="400px"/> </td>
                        </div>
                       
                    </tr>
                    <tr>
                        <div className="t2">
                        <td><img src={process.env.PUBLIC_URL+"images/siems.png"} alt="logo" width="300px" /></td>
                        <td><img src={process.env.PUBLIC_URL+"images/crowdfunding.png"} alt="logo" width="200px" /></td>
                        <td><img src={process.env.PUBLIC_URL+"images/irex.png"} alt="logo" width="150px"/></td>

                        </div>
                        
                    </tr>
                    <tr>
                        <div className="t3">
                        <td><img src={process.env.PUBLIC_URL+"images/technovation girls.png"} alt="logo" width="200px" /></td>
                        <td><img src={process.env.PUBLIC_URL+"images/fsd.jpg"} alt="logo" width="150px"/></td>
                        <td><img src={process.env.PUBLIC_URL+"images/usaid.png"} alt="logo" width="150px"/></td>

                        </div>
                        
                    </tr>
                    <tr>
                        <div className="t4">
                        <td><img src={process.env.PUBLIC_URL+"images/us embassy.png"} alt="logo" width="100px" /></td>
                        <td><img src={process.env.PUBLIC_URL+"images/ambassade.png"} alt="logo" width="150px"/></td>
                        <td><img src={process.env.PUBLIC_URL+"images/giz.png"} alt="logo" width="100px"/></td>

                        </div>
                        
                    </tr>
                    <tr>
                        <div className="t5">
                        <td><img src={process.env.PUBLIC_URL+"images/garage.png"} alt="logo" width="250px"/></td>
                        <td><img src={process.env.PUBLIC_URL+"images/nexus.png"} alt="logo" width="300px"/> </td>

                        </div>
                       
                    </tr>
                    </table>

                </div>

                </section>

                
            </div>
        )
    }
}