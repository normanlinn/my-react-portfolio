import "./style.scss";
import {
  FaQuestion,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Animate } from "react-simple-animate";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text-wrapper">
        <h1>
          Hello, I'm Zaw Linn Naing,
          <br />
          Front-end Developer.🤓💬
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me-buttons-wrapper">
            <button>
              hire me
              <FaQuestion size={17} />
            </button>
            <a href="https://www.google.com">
              resume <FaDownload />
            </a>
          </div>
          <div className="contact-me-socials-wrapper">
            <a
              href="https://www.github.com/normanlinn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/zawlinnaing/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.facebook.com/mrnormanlinn"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/_normanlynn_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.twitter.com/zawlinnaing_"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
