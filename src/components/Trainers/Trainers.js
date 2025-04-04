/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
    Push your limits today to redefine your strength tomorrow
      <br />
     
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Amit Sir"
        desc="Every rep, every set, every step you take is a step closer to the best version of yourself. Trust the process, stay committed, and together, we’ll unlock your true potential."
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Arun Sir"
        desc="Your journey is unique, and with every challenge, you're growing stronger. Keep pushing, stay focused, and never forget that progress is made one day at a time."
        img={TrainerTwoBg}
      />
      <TrainerCard
        title="Power Trainer"
        name="Shilpi Ma'am"
        desc="Success is earned through dedication, persistence, and hard work. Trust the grind, embrace the sweat, and let’s turn those goals into achievements."
        img={TrainerThreeBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
