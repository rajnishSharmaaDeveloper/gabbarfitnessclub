/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";

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
      <div className="founderContent">
        <div className="founderImage">
          <img src={TrainerOneBg} alt="Amit Kumar Mourya" />
        </div>
        <div className="founderMessage">
          <h3>Founder</h3>
          <h2>Amit Kumar Mourya</h2>
          <p>
            Amit Kumar Mourya – Founder, Gabbar Fitness Club. With over 6 years of hands-on experience in the fitness industry, I’ve dedicated my career to helping people achieve their health and fitness goals. As a certified trainer and gym owner, I specialize in body transformation, strength training, and personalized fitness coaching. My passion is guiding individuals to become stronger—both physically and mentally—through discipline, consistency, and the right training approach.
          </p>
        </div>
      </div>
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

  .founderContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 50px 0 0 0;
  }

  .founderImage img {
    width: 100%;
    max-width: 1000px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .founderMessage {
    text-align: left;
  }

  .founderMessage h3 {
    color: #ed563b;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .founderMessage h2 {
    color: #232d39;
    font-size: 28px;
    margin-bottom: 15px;
  }

  .founderMessage p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 830px) {
    .founderContent {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .founderMessage {
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
`;

export default Trainers;
