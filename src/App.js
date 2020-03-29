import React from 'react';
import AboutPage from './pages/aboutpage/aboutpage.component';
import styled, { keyframes } from "styled-components";
import FadeIn from "@bit/formidablelabs.react-animations.fade-in";
import HomePage from './pages/homepage/homepage.component';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.scss';



const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: 0.5s ${FadeInAnimation};
`;


class App extends React.Component {
  render() {
    return (
      <div>
        <FadeInDiv>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/about' component = {AboutPage}/>
          <Route exact path = '/cv' component = {HomePage}/>
          <Route exact path = '/projects' component = {HomePage}/>
        </FadeInDiv>
      </div>
    )
  }
}

export default App;
