import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay : 1500,
      backSpeed: 60,
      strings: ["Developer", "Gamer", "Engineer"],
    }); 
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" className="img" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi</h2>
          <h1>I m Abhishek</h1>
          <h3>
            FreeLancer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down_arrow.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
