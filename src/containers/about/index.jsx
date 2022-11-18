import "./style.scss";
import PageHeaderContent from "../../components/PageHeaderContent";
import { IoInformationCircleSharp } from "react-icons/io5";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDatabase, FaDev } from "react-icons/fa";
import { personalData } from "./utlis";
import { Animate } from "react-simple-animate";
import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        title="about me"
        icon={<IoInformationCircleSharp size={30} />}
      />

      <div className="about-content">
        <div className="about-content-personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: `translateX(-800px)`,
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">front-end developer</h3>
            <p>
              Seasoned and independent Front End Developer with 3 years of
              experience in blending the art of design with skill of programming
              to deliver an immersive and engaging user experience through
              efficient website development, proactive feature optimization, and
              relentless debugging. Very passionate and aesthetics and UI
              design. It is imperative that you provide a thorough and
              professional approach to your resume. As a Front End Developer
              you'll be judged by your ability to use UX and UI concepts and
              follow design guidelines. It's about expressing your attention to
              detail and how you can help implement design ideas for your future
              employer.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: `translateX(500px)` }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">personal information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="label">{item.label}:</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-content-serviceWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: `translateX(500px)` }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about-content-serviceWrapper-innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDatabase
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiAndroid size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
