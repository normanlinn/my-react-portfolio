import "./style.scss";
import PageHeaderContent from "../../components/PageHeaderContent";
import { GiSkills } from "react-icons/gi";
import { skillData } from "./util";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <PageHeaderContent title="my skills" icon={<GiSkills size={30} />} />
      <div className="skills-content-wrapper">
        {skillData.map((item, key) => (
          <div key={key} className="skills-content-wrapper-innerContent">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-250px)" }}
              end={{ transform: "translateX(0)" }}
            >
              <h3 className="category-text">{item.label}</h3>
              <div>
                {item.data.map((dataItem, index) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                  >
                    <div key={index} className="progressBar-wrapper">
                      <p>{dataItem.skillName}</p>
                      <Line
                        percent={dataItem.percentage}
                        strokeWidth="2"
                        strokeColor="#B3FFAE"
                        strokeLinecap="round"
                        trailWidth="2"
                        // trailColor="var(--selected-theme-background-color"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
