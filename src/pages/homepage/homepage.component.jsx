import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {
  Link
} from "react-router-dom";
import './homepage.styles.scss';

const portrait = require ('../../assets/portrait.jpg');
const logo1 = require('../../assets/linkedin-logo.png');
const logo2 = require('../../assets/github-logo.png');


const HomePage = () => {
    return(
      <div className = 'homepage-content'>
        <div className = 'text-box'>
          <Image className = 'self-portrait' src = {portrait} roundedCircle/>
            <br/>
              Hello World, My name is <strong>Kenny Nguyen</strong>
              <br/>
              <hr/>
                <Link Style = "text-decoration: none" className = 'about-us' to ='/about'>
                  <Button variant="outline-info">About</Button>{' '}
                </Link>
                <a Style = "text-decoration: none" href = "https://road2paradise-bucket123.s3-ap-southeast-2.amazonaws.com/CirriculumVitae-+KennyNguyen2020.pdf">
                  <Button variant="outline-info">Curriculum Vitae
                  </Button>{' '}
                </a>
                <a href = "https://www.linkedin.com/in/kenny-d-nguyen/">
                  <Image className = 'logo' src = {logo1}/>
                </a>
                <a href = "https://github.com/road2paradise">
                  <Image className = 'logo' src = {logo2}/> {' '}
                </a>
              <hr/>
          </div>
      </div>
    )
}
export default HomePage