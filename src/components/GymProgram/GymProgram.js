/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram" id="program">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="🏋️‍♂️ Strength Training"
        desc="Focuses on building muscle mass, improving strength, and toning your body using free weights, machines, and compound exercises like squats, bench press, and deadlifts."
      />
      <GymProgramCard
        title="⚖️ Weight Loss & Fat Burn Workouts"
        desc="Includes cardio-based training like HIIT (High-Intensity Interval Training), circuits, and metabolic conditioning to help you burn fat efficiently while maintaining lean muscle."
      />
      <GymProgramCard
        title="💃 Zumba & Aerobics"
        desc="Fun, energetic group sessions that combine music and movement to burn calories, improve flexibility, and boost cardiovascular health — perfect for beginners and regulars alike."
      />
      <GymProgramCard
        title="🏃 Functional Training"
        desc="Improves mobility, posture, and body control using real-life movement-based exercises — ideal for athletes and everyday fitness."
      />
      <GymProgramCard
        title="👥 Group Classes"
        desc="Motivating, community-driven workouts that keep you accountable and energized. Includes bodyweight training, core sessions, and boot camps."
      />
      <GymProgramCard
        title="👤 Personal Training"
        desc="One-on-one coaching with certified trainers who tailor your workouts based on your body type, fitness level, and goals — with regular progress tracking."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
