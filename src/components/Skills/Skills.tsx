import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Parallax } from "react-parallax";
import patternImage from "../../../public/assets/pattern.png";

const Skills: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [skillsRef]);

  const skills = [
    { percentage: 98, text: "Comunicação" },
    { percentage: 96, text: "Colaboração" },
    { percentage: 89, text: "Adaptabilidade" },
    { percentage: 100, text: "Resiliência" },
  ];

  return (
    <div id="skills-area" ref={skillsRef} data-testid="skills-container">
      <Parallax bgImage={patternImage} strength={250}>
        <div className="container py-5">
          <h3 className="main-title-skills">Soft Skills</h3>
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div className="col-md-3 col-6 text-center mb-4" key={index}>
                <div className="circle-container">
                  <CircularProgressbar
                    value={animate ? skill.percentage : 0}
                    text={`${animate ? skill.percentage : skill.percentage}%`}
                    styles={buildStyles({
                      textSize: "20px",
                      pathColor: "#3ec1d5",
                      textColor: "#fff",
                      trailColor: "#444",
                    })}
                  />
                </div>
                <p className="mt-3 text-white">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Skills;
