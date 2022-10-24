import React, { Component } from 'react'
import './banner.css'



  export default class Banner extends Component {
    render() {
    return (
      <div>
        <div className="alert alert-info alert-dismissible" role="alert">
        <button aria-label="Close" class="close" data-dismiss="alert" type="button"><span aria-hidden="true">×</span></button>
        <p>FemiDevs is back! We're supporting girls and young women on digital skills. <a href="/" target="_blank">Learn More</a>.</p>
      </div>
      </div>
    
    )
  }
}

