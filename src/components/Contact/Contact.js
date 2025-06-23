/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      {/* <Map /> */}
      <Form />
    </Container>
    <footer>
      <div className="footerContent">
        <div className="footerAbout">
          <h3>About Us – Gabbar Fitness Club</h3>
          <p>
            Welcome to Gabbar Fitness Club, your trusted destination for fitness, transformation, and motivation. Located in the heart of Gomti Nagar, Lucknow (1/181 Vijyant Khand), we are a unisex gym committed to helping people of all ages and fitness levels achieve their health goals.
            Whether you want to lose weight, build muscle, tone your body, or boost your stamina, we provide the tools, training, and support to make it happen.
          </p>
        </div>

        <div className="footerRight">
          <div className="footerAddress">
            <h3>Gabbar Fitness Club</h3>
            <p>1/181 Vijyant Khand</p>
            <p>Gomti Nagar, Lucknow 226010</p>
            <p>Email: info@gabbarfitness.com</p>
            <p>Mobile: 9026361448 , 8707710311</p>
          </div>
          <div className="socialLinksContainer">
            <h4>Follow Us</h4>
            <div className="socialLinks">
              <a href="https://www.instagram.com/gabbarfitnessclub" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/gabbarfitnessclub" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.youtube.com/@gabbarfitnessclub5508" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        © 2025 Gabbar Fitness Club — Designed by{" "}
        <a href="https://www.instagram.com/rajnish_sharmaa" target="_blank" rel="noopener noreferrer">Rajnish Sharma</a>
      </p>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
   
  }

  footer {
    height: 50vh;
    background: #232d39;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    box-sizing: border-box;

    .footerContent {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footerAbout {
      width: 50%;
      min-width: 250px;

      h3 {
        margin-bottom: 10px;
        font-size: 20px;
        color: #ed563b;
      }

      p {
        font-size: 14px;
        line-height: 1.5;
      }
    }

    .footerRight {
      width: 45%;
      min-width: 250px;

      .footerAddress h3 {
        margin-bottom: 10px;
        font-size: 20px;
        color: #ed563b;
      }

      .footerAddress p {
        margin: 5px 0;
        font-size: 14px;
      }

      .socialLinksContainer h4 {
        margin: 15px 0 10px;
        font-size: 18px;
        color: #ed563b;
      }

      .socialLinks a {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 8px;
        padding: 6px 12px;
        background: #ed563b;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
        transition: background 0.3s ease;
      }

      .socialLinks a:hover {
        background: #ff7350;
      }
    }

    hr {
      border: none;
      height: 1px;
      background: #444;
      margin: 10px 0;
    }

    .copyright {
      text-align: center;
      font-size: 13px;
      color: #ccc;
      a {
        color: #ed563b;
        text-decoration: none;
      }
      a:hover {
        color: #ff7350;
      }
    }
  }

  @media (max-width: 768px) {
    footer {
      padding: 20px;
      height: auto;
    }
    .footerContent {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footerAbout, .footerRight {
      width: 100%;
      margin-bottom: 20px;
    }
    .socialLinks a {
      margin: 5px;
    }
  }
`;

export default Contact;
