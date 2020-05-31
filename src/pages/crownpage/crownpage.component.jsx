import React from "react";
import Reveal from "react-reveal/Reveal";
import { ReactComponent as Logo1 } from "../../assets/crown.svg";
const CrownPage = () => {
  return (
    <Reveal bottom delay={400}>
      <div className="title">
        <Logo1 />
        <h1>Crown Shopping Plaza</h1>
        <br />
        <br />
        <br />
        <h2> About</h2>
        <span>
          Crown Plaza was my first real portfolio project using React. I chose
          to learn React as it is a modern Javascript library that is commonly
          used in industry - so I could use as a transferable skill on my next
          job! <br />
          Learning about component and state management approach of Web
          Development was interesting and challenging as I only learnt Object
          Oriented Programming in University.
        </span>
        <h2> Lessons Learnt </h2>
      </div>
    </Reveal>
  );
};

export default CrownPage;
