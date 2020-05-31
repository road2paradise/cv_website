import React from "react";
import Reveal from "react-reveal/Reveal";
import "./natourspage.styles.scss";

const Logo2 = require("../../assets/logo-green-small.png");

const NatoursPage = () => {
  return (
    <Reveal bottom delay={400}>
      <div className="natours-content">
        <img alt="natours-logo" src={Logo2} className="natours-logo" />
        <h1>Natours</h1>
        <p>
          {" "}
          <a className="option" href="https://natours-inc.herokuapp.com/">
            {" "}
            Link{" "}
          </a>
        </p>
        <br />
        <br />
        <br />
        <h2> About</h2>
        <p>
          Natours was my first ever experience with Back-end web development.
          This was by far the funnest project I have completed. <br /> There
          were lots to learn, heaps of challenging components to make it all
          work and was overall a great bootcamp course on NodeJS, Express,
          MongoDB and more.
        </p>
        <br />
        <br />
        <br />
        <h2> Key concepts learnt </h2>
        <br />
        <li>
          What is NodeJS, Pros and Cons, and potential use cases in industry
        </li>
        <li>
          Basics of full stack webpages including request-response model (DNS,
          HTTP Request / responses)
        </li>
        <li>
          Introduction to back-end development and other technologies other than
          MongoDB, NodeJS and their use cases.
        </li>
        <li>
          Introduction to API's including the processes involving designing
          RESTful API, developing and testing using Postman using Express.
          Documenting and creating flexible APIs as they should be accessible by
          multiple other platforms.{" "}
        </li>
        <li>
          The fundamental operation of NodeJS - the event loop and event-driven
          architecture.{" "}
        </li>
        <li>
          Introduction to MongoDB, Mongoose and Compass as a back-end database
          to store information on tours, users and tracking payments.
        </li>
        <li>
          Introduction to SQL and NoSQL databases including differences, use
          cases and querying.
        </li>
        <li>Error handling with Express</li>
        <li>
          Authentication, Authorization and Security using JSON Web Tokens -
          storing as cookies. Incorporating some good practices in security such
          as rate limiting, maximum login attempts, Sanitizing user data etc.
        </li>
        <li>
          Email handling such as reset password emails, forgotten usernames etc.{" "}
        </li>
      </div>
    </Reveal>
  );
};

export default NatoursPage;
