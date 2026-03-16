import "./styles/Vision.css";

const learningItems = [
  "Quantum Computing Systems",
  "Multi-Agent LLM Frameworks",
  "AI Automation Workflows",
  "Startup Market Validation",
  "Scalable Product Systems",
];

const Vision = () => {
  return (
    <div className="vision-section section-container" id="vision">
      <div className="vision-container">
        <div className="vision-left">
          <h2>
            My <span>Vision</span>
          </h2>
          <p className="vision-para">
            My goal is to build scalable technology companies that solve
            real-world problems. I am particularly interested in AI automation
            systems and sustainable businesses that address environmental
            challenges such as plastic waste.
          </p>
        </div>
        <div className="vision-right">
          <h3>Currently Exploring</h3>
          <ul className="vision-learning-list">
            {learningItems.map((item, i) => (
              <li key={i} className="vision-learning-item">
                <span className="vision-dot"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vision;
