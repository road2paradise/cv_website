import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import styled, { keyframes } from "styled-components";
import FadeIn from "@bit/formidablelabs.react-animations.fade-in";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


import './homepage.styles.scss';


const portrait = require ('../../assets/portrait.jpg');
const logo1 = require('../../assets/linkedin-logo.png');
const logo2 = require('../../assets/github-logo.png');
const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: 0.5s ${FadeInAnimation};
`;


const HomePage = () => {
    return(
      <FadeInDiv>
        <div className = 'content'>
          <div className = 'text-box'>
           <Image className = 'self-portrait' src = {portrait} roundedCircle/>
             <br/>
               Hello World, My name is <strong>Kenny Nguyen</strong>
                <br/>
                <hr/>
                  <Link Style = "text-decoration: none" className = 'about-us' to ='/about'>
                    <Button variant="outline-info">About</Button>{' '}
                  </Link>
                  <a Style = "text-decoration: none" href = "C:\Users\ken_n\OneDrive\Desktop\Job Stuff\CirriculumVitae- KennyNguyen2020.pdf">
                    <Button variant="outline-info">Curriculum Vitae
                    </Button>{' '}
                  </a>
                  <Link Style = "text-decoration: none" className = 'projects' to ='/projects'>
                    <Button variant="outline-info">Projects
                    </Button>{' '}
                  </Link>
                  <a href = "https://www.linkedin.com/in/kenny-d-nguyen/">
                    <Image className = 'logo' src = {logo1}/>
                  </a>
                  <a href = "https://github.com/road2paradise">
                    <Image className = 'logo' src = {logo2}/> {' '}
                  </a>
                <hr/>
            </div>
        </div>
      </FadeInDiv>
    )
}

export default HomePage