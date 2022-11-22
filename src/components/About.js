import React from "react";

function About(props) {
  return (
    <div className="container-about">
      <h1 className="about-h1">Reid Williamson</h1>
      <div className="about-h2">
        <h2>Web Developer / Blogger</h2>
      </div>
      <div className="about-img">
        <img
          id="mypic"
          src="https://i.imgur.com/3Pe13E3.jpg"
          alt="me"
          width="300"
          height="300"
        />
      </div>
      <p className="about-p">
        Hey guys my name is Reid. I am the owner of 11th hours sons. I'm
        currently working for Amazon and in my free time I like to do software
        development and blog. I built this blog from scratch using React JS. If
        you'd like to reach out to me see the link below otherwise enjoy the
        content!
      </p>
      <a
        href="https://www.linkedin.com/in/reid-williamson-83bb99b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="about-btn"
      >
        Get In Touch
      </a>
      <div>
        <br />
      </div>
    </div>
  );
}

export default About;
