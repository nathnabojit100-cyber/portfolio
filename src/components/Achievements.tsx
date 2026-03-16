import "./styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achieve<span>ments</span>
        </h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-content">
              <h4>District Science Seminar</h4>
              <span className="achievement-year">2023</span>
              <p>
                2nd place at Block/District level science seminar presenting on
                the International Year of Millets (2023).
              </p>
            </div>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🚀</div>
            <div className="achievement-content">
              <h4>NIT Ideathon</h4>
              <span className="achievement-year">March 2026</span>
              <p>
                Participated in Ideathon at National Institute of Technology.
                Presented the AI Voice Receptionist concept and received
                positive feedback from the founder of Fueler. Invited for
                future mentorship opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
