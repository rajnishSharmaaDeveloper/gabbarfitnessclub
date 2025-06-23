/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";
import { FaPhone, FaEnvelope, FaInstagramSquare, FaFacebookF, FaYoutubeSquare, FaMapMarked } from "react-icons/fa";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      <div className="contactContent">
        <div className="formContainer">
          <Form />
        </div>
        {/* <div className="mapContainer">
          <Map />
        </div> */}
      </div>
    </Container>
    <footer>
      {/* ///flmkfm */}
      <div className="footerContent">
        <div className="footerAbout">
          <h3>About Us – Gabbar Fitness Club</h3>
          <p>
            Welcome to Gabbar Fitness Club, your trusted destination for fitness, transformation, and motivation. Located in the heart of Gomti Nagar, Lucknow, we are a unisex gym committed to helping people of all ages and fitness levels achieve their health goals.
          </p>
          <div className="achievements">
            <div className="achievementItem">
              <span className="achievementNumber">10+</span>
              <span className="achievementText">Certified Trainers</span>
            </div>
            <div className="achievementItem">
              <span className="achievementNumber">500+</span>
              <span className="achievementText">Happy Members</span>
            </div>
            <div className="achievementItem">
              <span className="achievementNumber">5+</span>
              <span className="achievementText">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerAddress">
            <h3>Gabbar Fitness Club</h3>
            <p><FaMapMarked className="icon" /> 1/181 Vijyant Khand, Gomti Nagar, Lucknow 226010</p>
            <p><FaEnvelope className="icon" /> info@gabbarfitness.com</p>
            <p><FaPhone className="icon" /> 9026361448, 8707710311</p>
          </div>
          <div className="footerHrsAndSocial">
            <div className="footerHours">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
            </div>
            <div className="socialLinksContainer">
              <h3>Follow Us</h3>
              <div className="socialLinks">
                <a href="https://www.instagram.com/gabbarfitnessclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagramSquare className="socialIcon" />
                </a>
                <a href="https://www.facebook.com/gabbarfitnessclub" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF className="socialIcon" />
                </a>
                <a href="https://www.youtube.com/@gabbarfitnessclub5508" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutubeSquare className="socialIcon" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="footerBottom">
        <hr />
        <p className="copyright">
          © {new Date().getFullYear()} Gabbar Fitness Club — All Rights Reserved | Designed by{" "}
          <a href="https://www.instagram.com/rajnish_sharmaa" target="_blank" rel="noopener noreferrer">Rajnish Sharma</a>
        </p>
      </div>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  background: #f9f9f9;
  padding-bottom: 0;

  .container {
    max-width: 1200px;
    padding: 60px 20px;
  }

  .contactContent {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
  }

  .formContainer {
    flex: 1 1 400px;
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .mapContainer {
    flex: 1 1 400px;
    min-height: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  footer {
    background: #232d39;
    color: #fff;
    padding: 60px 0 0;

    .footerContent {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      justify-content: space-between;
    }

    .footerAbout {
      flex: 1 1 200px;

      h3 {
        margin-bottom: 20px;
        font-size: 22px;
        color: #ed563b;
        position: relative;
        padding-bottom: 10px;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #ed563b;
        }
      }

      p {
        font-size: 15px;
        line-height: 1.7;
        color: #ddd;
        margin-bottom: 20px;
      }
    }

    .achievements {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 20px;

      .achievementItem {
        background: rgba(237, 86, 59, 0.1);
        padding: 10px 15px;
        border-radius: 5px;
        text-align: center;
        flex: 1 1 100px;

        .achievementNumber {
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: #ed563b;
        }

        .achievementText {
          display: block;
          font-size: 12px;
          color: #ddd;
        }
      }
    }

    .footerRight {
      flex: 1 1 400px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;

      > div {
        flex: 1 1 150px;
      }

      h3 {
        margin-bottom: 20px;
        font-size: 22px;
        color: #ed563b;
        position: relative;
        padding-bottom: 10px;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #ed563b;
        }
      }

      p {
        margin: 10px 0;
        font-size: 15px;
        color: #ddd;
        display: flex;
        align-items: flex-start;
        line-height: 1.6;

        .icon {
          margin-right: 10px;
          color: #ed563b;
          margin-top: 3px;
          flex-shrink: 0;
        }
      }
    }

    .footerHrsAndSocial{
      display:flex;
      flex-direction: column;
      gap:1px;
    }
    .socialLinksContainer {
      .socialLinks {
        display: flex;
        gap: 15px;
        margin-top: 20px;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(237, 86, 59, 0.1);
          color: #ed563b;
          border-radius: 50%;
          transition: all 0.3s ease;

          &:hover {
            background: #ed563b;
            color: #fff;
            transform: translateY(-3px);
          }

          .socialIcon {
            font-size: 18px;
          }
        }
      }
    }

    .footerBottom {
      max-width: 1200px;
      margin: 40px auto 0;
      padding: 20px;

      hr {
        border: none;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
        margin: 20px 0;
      }

      .copyright {
        text-align: center;
        font-size: 14px;
        color: #aaa;

        a {
          color: #ed563b;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #ff7350;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .container {
      padding: 40px 20px;
    }

    footer {
      .footerContent {
        gap: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    .contactContent {
      flex-direction: column;
    }

    .formContainer,
    .mapContainer {
      flex: 1 1 100%;
    }

    footer {
      .footerContent {
        flex-direction: column;
      }

      .footerAbout,
      .footerRight {
        flex: 1 1 100%;
      }

      .footerRight {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 480px) {
    .formContainer {
      padding: 30px 20px;
    }

    footer {
      padding: 40px 0 0;

      .footerContent {
        padding: 0 15px;
      }

      .achievements {
        justify-content: center;
      }

      .footerBottom {
        padding: 20px 15px;
      }
    }
  }
`;

export default Contact;