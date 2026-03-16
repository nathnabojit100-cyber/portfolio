import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* ── TIORA Internship ── */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Intern</h4>
                <h5>Tetr College of Business – TIORA (D2C Brand)</h5>
              </div>
              <h3>2026</h3>
            </div>

            {/* Description sits left, above the stat cards */}
            <div className="career-body">
              <p className="career-desc">
                Worked with D2C brand <strong>TIORA</strong>. Key results:
              </p>

              <div className="career-stats">
                <div className="career-stat-card career-stat-1">
                  <span className="stat-value">₹90K</span>
                  <span className="stat-label">Sales on Day 1</span>
                </div>
                <div className="career-stat-card career-stat-2">
                  <span className="stat-value">₹1.5L</span>
                  <span className="stat-label">Valentine's Campaign</span>
                </div>
                <div className="career-stat-card career-stat-3">
                  <span className="stat-value">₹5L</span>
                  <span className="stat-label">Total Sales in March</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── NIT Ideathon ── */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NIT Ideathon Participant</h4>
                <h5>National Institute of Technology</h5>
              </div>
              <h3>Mar 2026</h3>
            </div>
            <p>
              Participated in an Ideathon at NIT, presenting the AI Voice
              Receptionist concept. Received positive feedback from the founder
              of Fueler and was invited for future mentorship opportunities.
            </p>
          </div>

          {/* ── AI Entrepreneur ── */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Entrepreneur</h4>
                <h5>Independent</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered voice automation systems for small businesses.
              Independently researching, designing, and developing practical AI
              tools that reduce operational costs and improve customer experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
