import React from "react";
import Reveal from "react-reveal/Reveal";
import "./crownpage.styles.scss";
import { ReactComponent as Logo1 } from "../../assets/crown.svg";
const CrownPage = () => {
  return (
    <Reveal bottom delay={1000}>
      <div>
        <Logo1 className="crown-logo" />
        <h1>Crown Shopping Plaza</h1>
        <span>
          {" "}
          <a
            className="option"
            href="https://crwn-shopping-plaza.herokuapp.com/"
          >
            {" "}
            Link{" "}
          </a>
        </span>
        <br />
        <br />
        <br />
        <h2> About</h2>
        <span>
          Crown Plaza was my first portfolio project while I was learning
          Javascript and React. I chose to learn React as it is a modern
          Javascript library that is commonly used in industry - so I could use
          as a transferable skill on my next job! <br />
          Learning about component and state management approach of Web
          Development was interesting and challenging as I only learnt Object
          Oriented Programming in University.
        </span>
        <br />
        <br />
        <br />
        <h2> Key concepts learnt </h2>
        <br />
        <li>
          {" "}
          Introduction to React basics including data flow, the Virtual /
          ReactDOM, Lifecycle methods. Declarative and component based vs OOP.{" "}
        </li>
        <li> Introduction to SASS / CSS. </li>
        <li>
          {" "}
          Introduction to common state management libraries such as Redux, Redux
          Saga, Asynchronous Redux and State Normalisation.
        </li>
        <li>
          {" "}
          Learning how to use React Hooks and the difference between class and
          function components
        </li>
        <li>
          {" "}
          Integrating with other APIs, libraries and services such as Firebase
          and Stripe
        </li>
        <li> Deploying to Heroku</li>
      </div>
    </Reveal>
  );
};

export default CrownPage;
