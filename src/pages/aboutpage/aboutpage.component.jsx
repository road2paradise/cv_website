import React from 'react';
import './aboutpage.styles.scss';
import Image from 'react-bootstrap/Image'
import styled, { keyframes } from "styled-components";
import FadeIn from "@bit/formidablelabs.react-animations.fade-in";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const portrait = require ('../../assets/portrait.jpg');
const reactLogo = require ('../../assets/react-logo.png');
const pythonLogo = require ('../../assets/python-logo.png');
const awsLogo = require ('../../assets/aws-logo.png');
const jsLogo = require ('../../assets/js-logo.png');
const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: 0.5s ${FadeInAnimation};
`;


const AboutPage = () => {
  return(
    <FadeInDiv>
      <div className = 'about-page'>
        <div className = 'image-container'>
          <Image className = 'self-portrait' src = {portrait} roundedCircle/>
            <div className = 'about-page-content'>
              <strong> Hi Everyone, I'm Kenny Nguyen, a Graduate Electrical Engineer from the University of Auckland.</strong>
              <br/>
              I'm an aspiring software developer who thrives off new challenges especially to do with new technologies in the field of 
              software and computer engineering and applying my knowledge and expertise to better the world around us. Despite my academic
              background being in Electrical and Electronics Engineering I have found a new passion for Software and am currently looking at 
              opportunities in this field.
              <br/><br/>
              I am self taught and have completed projects using:  JavaScript, Python and React mainly dealing with front end web development and UI projects. <br/>
              <strong>In future</strong> I want to increase my knowledge on backend programming and development, which is why I took the time to learn AWS - to increase my knowledge and skills on
              industry relevant network and webserver architecture. I have recently 
              <strong> passed my Solutions Architect Associate (SAA-C01) exams in March 2020 (Click logo to view credentials)</strong> <br/>
              <br/><br/>
              <Image className = 'js-icon' src = {jsLogo}/>{' '}
              <Image className = 'python-icon' src = {pythonLogo} />{' '}
              <Image className = 'react-icon' src = {reactLogo} /> {' '}
              <a href = "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2020-03-19&ci=AWS01342462">
              <Image className = 'aws-icon' src = {awsLogo}/>{' '}
              </a>
              <br/><br/>
              My hobbies include Photography (**insert link to google photos here kenny**), Gymming and keeping fit, Gaming and also travelling and 
              hanging out with my friends and family. 
            </div>
        </div>
      </div>

    </FadeInDiv>
  )
}

export default AboutPage