/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import gabbar1 from "../Image/gabbar1.jpeg"
import gabbar2 from "../Image/gabbar2.jpg"
import gabbar3 from "../Image/gabbar3.jpg"
import gabbar4 from "../Image/gabbar4.jpg"
import gabbar5 from "../Image/gabbar5.jpg"
import gabbar6 from "../Image/gabbar6.jpg"
import gabbar7 from "../Image/gabbar7.jpg"
import gabbar8 from "../Image/gabbar8.jpg"
import gabbar9 from "../Image/gabbar9.jpg"
import gabbar10 from "../Image/gabbar10.jpg"
import gabbar11 from "../Image/gabbar11.jpg"

const Gallery = () => (
  <section css={styles} className="trainers" id="ourGallery">
    <h2>
      Our <span>Gallery</span>
    </h2>
    <Icon />
    <p>
      Show member transformations, workout shots, or training moments to inspire others.
      <br />

    </p>
    <Container>
      <TrainerCard
        img={TrainerOneBg}
      />
      <TrainerCard
        img={gabbar1}
      />
      <TrainerCard
        img={gabbar7}
      />


    </Container>

    <Container>
      <TrainerCard
        img={gabbar2}
      />
      <TrainerCard
        img={gabbar3}
      />
      <TrainerCard
        img={gabbar4}
      />

    </Container>

    <Container>
      <TrainerCard
        img={gabbar8}
      />
      <TrainerCard
        img={gabbar9}
      />
       <TrainerCard
        img={gabbar10}
      />
    </Container>

    <Container>
      <TrainerCard
        img={gabbar5}
      />
       <TrainerCard
        img={gabbar11}
      />
      <TrainerCard
        img={gabbar6}
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

export default Gallery;
