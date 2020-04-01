import React from 'react';
import './aboutpage.styles.scss';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Image from 'react-bootstrap/Image'
import Reveal from 'react-reveal/Reveal';
/*import styled, { keyframes } from "styled-components";
import NavBar from '../../components/navbar/navbar.component';
import FadeIn from "@bit/formidablelabs.react-animations.fade-in";

const pythonLogo = require ('../../assets/python-logo.png');
const jsLogo = require ('../../assets/js-logo.png');
const linkedInLogo = require('../../assets/linkedin-logo.png');
const githubLogo = require('../../assets/github-logo.png');
*/
const awsLogo = require ('../../assets/aws-logo.png');
const reactLogo = require ('../../assets/react-logo.png');
const portrait = require ('../../assets/portrait.jpg');
const stantecLogo = require ('../../assets/stantec.svg');
const fphLogo = require ('../../assets/FPHcare-logo.svg.png');

const AboutPage = () => {
  return(
    <div className = 'about-page'>
      <Reveal top>
        <Image className = 'portrait-self'src = {portrait} roundedCircle/>
        <h1> ABOUT ME</h1>
      </Reveal>
        <div className = 'about-page-content1'>
        <Reveal bottom>
          <h2> REACT / JAVASCRIPT </h2>
            <Image className = 'react-logo' src = {reactLogo}/>
            <div className = 'paragraph-1'>
              <p>
                  I have <strong>self-taught myself React and Javascript using Udemy</strong>, an online learning tool - which has helped me develop and work on some interesting projects - which you can access on the Projects tab. Having completed these
                  projects I find myself picking up <strong> CSS, SCSS and HTML </strong> as part of the package for front-end development. I want to use these skills learnt to further my career in Software and hopefully build and maintain beautiful websites, apps and more! 
                  Coming from an Electrical Engineering background - I have previous tertiary level experience in embedded coding, <strong>C, C++</strong> and exposure to Object Oriented Programming. In future I want to expand my skillset to encapsulate 
                  back-end development to further progress myself towards being a full stack developer.                 
              </p>
            </div>
          </Reveal>
        </div>
        <div className = 'about-page-content2'>
          <Reveal bottom>
          <h2> AMAZON WEB SERVICES </h2>
              <Image className = 'aws-logo' src = {awsLogo}/>
                <div className = 'paragraph-2'>
                  <p>
                    It is fair to say, if someone asked me what the cloud was in 2018 - I would say to them its a file storage service provided by Google (Google Drive) or Microsoft (One-Drive). Little did I know this was only partially true and that the Cloud provides more than a file storage service.
                    As a gamer, I always wondered how big gaming companies such as Valve, Blizzard and even Riot Gaming hosted servers in which provided very little latency, high reliability and durability whilst providing secure connections to the users PC's.
                    This led me to delve into the world of Cloud Computing. With the help of a friend who recommended me to look at Amazon Web Services as a starting point / gateway into cloud computing I learnt how powerful and how much AWS has changed the landscape of webservers.
                    Learning more about the enterprise side of servers and the cloud allowed me to learn and understand how 'enterprise-standard' servers are created, maintained and distributed.<br/> <strong>Fun fact - this website is actually hosted as a static webserver on AWS - S3 (Simple Storage Service) </strong>
                  </p>
              </div>
          </Reveal>
        </div>
        <div className = 'about-page-content3'>
          <Reveal bottom>
            <h2> WORK EXPERIENCE </h2>
              <div className = 'paragraph-3'>
              <Image className = 'fph-logo' src = {fphLogo}/>
                  <p>
                    <strong> In the summer of '16 to '17 I was working at Fisher and Paykel Healthcare as an Assistant Product Development Engineer. </strong> I was placed in the Respiratory and Acute Care (RAC) team which was in the process of renewing certifications on an existing product - to keep market
                    relevance and releasing a new product which would replace the existing 20 year old product. I worked on proposing, producing and executing reliability testing on the existing and new products to meet international standard - documenting and also creating Test Reports (TR) which would later be
                    published for internal and complaince auditing. I also helped in designing and developing a first prototype a testing environment for the new product to replicate neonatal (infant) lungs. This project harnessed my tertiary level understanding in electronics (electronics design, soldering, Printed Circuit Board layout)
                    and also very basic scripting languages - as I had to automate data acquision from the temperature thermostat and humidity readings in the testing environment. I created the first working prototype and documented accordingly for future development work.                  
                  </p>
                  <Image className = 'stantec-logo' src = {stantecLogo}/>
                  <p>
                    <strong> I was employed as a Summer Intern at Stantec in the summer of '17 to '18 and subsequently re-hired as a Graduate Electrical Engineer until Summer '19</strong> as soon as my internship was over. My business unit was the Asia-Pacific Water Team - in which we collaborated with other Civil, Structural, Mechanical and Environmental Engineers
                    to design and deliver critical Water Infrastructure including Hydro-electric generation plants - notably one in Fiji. I provided consultancy and engagement services with clients including presentations, workshops and system requirements. On the odd day - we would provide construction monitoring services where
                    I get the opportunity to see my designs come to life by working on-site with contractors.
                  </p>
              </div>
          </Reveal>
        </div>
        <div className = 'about-page-content4'>
          <Reveal bottom>
            <h2> HOBBIES AND INTERESTS </h2>
              <div className = 'paragraph-4'>
              </div>
          </Reveal>
        </div>
    </div>
  )
}

export default AboutPage