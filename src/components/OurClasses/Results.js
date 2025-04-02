/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="Warm-up (Cardio – Getting Ready) "
        info="Just like a gym session starts with cardio to get the body ready, a class can begin with a quick recap or a fun icebreaker to engage the mind."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Strength Training (Main Lesson – Building Knowledge)"
        info="This is like lifting weights—it’s the core part where students learn the main topic"
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Cool-down (Application & Reflection – Retaining Knowledge)"
        info="Just like stretching and cooling down helps muscles recover, ending a class with application exercises helps the brain absorb what was learned."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Full-Body Workout (Review Everything)"
        info="Go over key concepts from all previous classes, just like a full-body workout combines all muscle groups."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
