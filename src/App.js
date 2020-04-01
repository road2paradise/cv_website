import React from 'react';
import AboutPage from './pages/aboutpage/aboutpage.component';
import HomePage from './pages/homepage/homepage.component';
import {
  Route,
  Link
} from "react-router-dom";
import Switch from "react-switch"
import './App.scss';

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
              <Link className =  'option' to ='/'>Projects</Link>
            </div>
            <div className = 'switch'>
              <span className = 'text'>
              Night Mode
              </span>
            <Switch 
              onChange = {this.handleChange} 
              checked = {this.state.checked}
              offColor = '#00000'
              onHandleColor = '#808080'
              offHandleColor = '#808080'
              width = {70}
              height = {30}
              />
            </div>
          </div>
            <div className = {'content'}>
              <Route exact path = '/' component = {HomePage}/>       
              <Route exact path = '/about' component = {AboutPage}/>       
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
