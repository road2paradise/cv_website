import React from 'react';
import AboutPage from './pages/aboutpage/aboutpage.component';
import HomePage from './pages/homepage/homepage.component';
import { TitleComponent } from './components/title/Title.component.jsx';
import Switch from "react-switch"
import {
  Route,
  Link
} from "react-router-dom";



import './App.scss';

const withTitle = ({ component: Component, title }) => {
  return class Title extends React.Component {
      render() {
          return (
              <React.Fragment>
                  <TitleComponent title={title} />
                  <Component {...this.props} />
              </React.Fragment>
          );
      }
  };
};

const HomePageComponent = withTitle ({ component: HomePage, title: 'Home'});
const AboutPageComponent = withTitle ({ component: AboutPage, title: 'About'});

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false,
    }
    this.props = props;
  }

  handleChange = (checked) => {
    this.setState({checked})
  };
  render() {
    return (
      <div className = 'dir'>
        <div className = {this.state.checked ?  'wrappertrue' : 'wrapperfalse'}>
          <div className = 'header'>
            <div className =  'options'>
              <Link className =  'option' to ='/'>Kenny Nguyen</Link>
              <Link className =  'option' to ='/about'>About</Link>
              <a className =  'option'  target="_blank" rel="noopener noreferrer" href = "https://road2paradise-bucket123.s3-ap-southeast-2.amazonaws.com/CirriculumVitae-+KennyNguyen2020.pdf">Curriculum Vitae</a>              
            </div>
            <div className = 'switch'>
              <h1 className = 'text'>
              Night Mode
              </h1>
            <Switch 
              onChange = {this.handleChange} 
              checked = {this.state.checked}
              offColor = '#00000'
              onHandleColor = '#808080'
              offHandleColor = '#808080'
              width = {50}
              height = {25}
              />
            </div>
          </div>
            <div className = {'content'}>
              <Route exact path = '/' component = {HomePageComponent}/>       
              <Route exact path = '/about' component = {AboutPageComponent}/>       
            <br/>
            <footer>
                COPYRIGHT KENNY NGUYEN 2020
            </footer>
            </div>
          </div>
      </div>
    )
  }
}


export default App;
