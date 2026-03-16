import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NABOJIT
              <br />
              <span>NATH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI Builder</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Student</div>
              <div className="landing-h2-2">Entrepreneur</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Entrepreneur</div>
              <div className="landing-h2-info-1">Builder</div>
            </h2>
            <p className="landing-subtitle">
              Building AI automation tools that help businesses capture every customer interaction.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
