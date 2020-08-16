import React, { Component } from 'react'

export class About extends Component {
    render(){
        return(
<div>
  
  <div className="about-section" style={{background: 'url(../../assets/au.jpg) no-repeat', backgroundSize: '55%', backgroundColor: '#fdfdfd', overflow: 'hidden', padding: '100px 0'}}>
    <div className="inner-container" style={{width: '55%', float: 'right', backgroundColor: '#fdfdfd', padding: '150px'}}>
      <h1 className="margin-bottom: 30px;
      font-size: 30px;
      font-weight: 900;">About Us</h1>
      <p className="text" style={{fontSize: '13px', color: '#545454', lineHeight: '30px', textAlign: 'justify', marginBottom: '40px'}}>
        Scorpi Designs provides you the best solution of your problems and creative templates for your websites. You will find so many features on a single website that will help you to polish your skills. We have hired team of professional designers who would like to assist you in any type of project and bring out the best result. We also provide special discount or add up of any feature with any fee to our special customers. Our experts 24/7 available to assist our clients in their projects through Team Viewer, Zoom or Microsoft Team.  You would definitely like our services and will come to us again next time.          </p>
      <div className="goals" style={{display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '13px'}}>
        <span>Develop design knowledge</span>
        <span>Photoshop &amp; Illustrator usage</span>
        <span>Business growth</span>
      </div>
    </div>
  </div> 
  <footer className="footer">
    <div className="container">
      <div className="about-us">
        <h2>About Us</h2>
        <p>Scorpi Designs provides you the best solution of your problems and creative templates for your websites. You will find so many features on a single website that will help you to polish your skills. We have hired team of professional designers who would like to assist you in any type of project and bring out the best result.</p>
      </div>
      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>Stay updated</p>
        <div className="form-element">
          <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right" /></span>
        </div>
      </div>
      <div className="instagram">
        <h2>Instagram</h2>
        <div className="flex-row">
          <img src="../assets/insta1.jpg" alt="inst1" />
          <img src="../assets/insta2.jpg" alt="inst2" />
          <img src="../assets/insta3.jpg" alt="inst3" />
        </div>
        <div className="flex-row">
          <img src="../assets/insta4.jpg" alt="inst4" />
          <img src="../assets/insta5.jpg" alt="inst5" />
          <img src="../assets/insta6.jpg" alt="inst6" />
        </div>
      </div>
      <div className="follow">
        <h2>Follow Us</h2>
        <p>Social</p>
        <div>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
        </div>
      </div>
    </div>
    <div className="rights flex-row">
      <h4 className="text-gray">Copyright ©2020 All rights reserved | developed By @Scorpion </h4>
    </div>
    <div className="move-up">
      <span><i className="fas fa-arrow-circle-up fa-2x" /></span>
    </div>
  </footer>
</div>

        );
    }
}

export default About;