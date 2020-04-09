import React from 'react';
import './aboutpage.styles.scss';
import Image from 'react-bootstrap/Image'
import Reveal from 'react-reveal/Reveal';
import CarouselPhotos from '../../components/carousel/carousel.component';
import AnimatedMaps from '../../components/animated-maps/animated-maps.component';


const awsLogo = require ('../../assets/aws-logo.png');
const reactLogo = require ('../../assets/react-logo.png');
const portrait = require ('../../assets/portrait.jpg');
const stantecLogo = require ('../../assets/stantec.svg');
const fphLogo = require ('../../assets/FPHcare-logo.svg.png');

class AboutPage extends React.Component {
  render(){
    return(
      <div className = 'about-page'>
        <Reveal bottom
        delay = {300}>
          <Image className = 'portrait-self'src = {portrait} roundedCircle/>
          <h1> Summary </h1>
          <br/>
          <p> - Completed Electrical Engineering Degree at the University of Auckland (end of 2017) with a GPA of 8.3/9.0.<br/>
              - Persuing a career in Software Engineering having skills in Front-end web development, looking to expand to become a full-stack developer.<br/>
              - Interested in new technology ( AI / ML ) and expanding skillset to further career in world of Software.                 
          </p>
        </Reveal>
          <div className = 'about-page-content1'>
          <Reveal bottom
           delay = {300}>
            <h2>Skills</h2>
          </Reveal>
          <Reveal bottom
          delay = {300}>
            <h3> React / Javascript </h3>
              <Image className = 'react-logo' src = {reactLogo}/>
              <div className = 'paragraph-1'>
                <p>
                  <br/>
                  I am a self-taught Software Developer with a technical background in Electrical Engineering (BE(Hons.) - First class honors). I have always had a keen interest in new technology and during my time in the workforce and 
                  University that I am better equipped (mentally) as a Software Developer. I have learnt using online modules (Udemy mainly) which includes state management using Redux, Apollo and also exposure to GraphQL.<br/> <br/>
                  Projects that I have completed include an E-Commerce Website - <a target="_blank" rel="noopener noreferrer" href = "https://crwn-shopping-plaza.herokuapp.com/">Crown Shopping Plaza </a> which features the use of <strong>Google-firebase as an authenticator , Firestore as a relational database to store new users, cart information etc. and uses  Stripe Payment API for payment transactions - all hosted on heroku</strong>.<br/>
                  <i>This website</i> was also created using ReactJS and hosted on AWS using static S3 with SSL encryption. 
                </p>
              </div>
            </Reveal>
          </div>
          <div className = 'about-page-content2'>
            <Reveal 
            bottom
            delay = {300}>
            <h3> Amazon Web Servies </h3>
                <Image className = 'aws-logo' src = {awsLogo}/>
                  <div className = 'paragraph-2'>
                    <p>
                      <br/>
                      Being a gamer, I have always been curious as to how big companies such as Blizzard and Valve own and operate their servers to millions of gamers around the world streaming real-time data whilst providing secure, reliable and robust servers. My friend who currently is a Software engineer recommended me to learn more about Amazon Web Services and Cloud Computing.
                      This was unfamilliar territory for me, being an Electrical / Electronics Engineer I dealt more with physical servers rather than cloud-based. Learning more about Cloud Computing especially the impact AWS has made to the World Wide Web has been nothing but inspirational. Being able to set up servers, build back-end infrastructure with industry-standard security within a few minutes and being cost-comparable to
                      having on-premises servers has been stimulating.  <br/>
                      <strong>I am a Certified Solutions Architect Associate as of March 2020 (Validation Number 208FS052MFQ116WP)</strong>                   
                    </p>
                </div>
            </Reveal>
          </div>
          <div className = 'about-page-content3'>
            <Reveal 
            bottom
            delay = {300}>
              <h3> Work Experience </h3>
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
            <Reveal 
            bottom
            delay = {300}>
              <h3> Hobbies and Interests</h3>
                <h4> Photography</h4>
                  
                  <div className = 'paragraph-4'>
                    <p>
                      <a href = " https://photos.app.goo.gl/4gRF7RC9GFVNnNP89"> Photography Portfolio </a> <br/>
                      <strong>Equipment:</strong> <br/>
                      Canon 400D | Temporary using Canon 600D<br/>
                      <strong>Lenses:</strong> <br/>
                      10-18mm EF-S f3-5.6 STM Ultra-wide angle lens <br/>
                      24mm EF-S f2.8 STM 'Pancake' lens <br/>
                      50mm EF f1.8 STM Prime lens <br/>
                      <strong>Post-shot editing software used:</strong><br/>
                      Adobe Lightroom CC
                    </p>
                  <CarouselPhotos/>
                  <h4> Travelling </h4>
                  <AnimatedMaps/>
                </div>
            </Reveal>
          </div>
      </div>
    ) 
  }  
}

export default AboutPage