import "./styles/About.css";

const tags = [
  "🤖 AI Builder",
  "⚡ Vibe Coder",
  "🚀 Student Entrepreneur",
  "🎙️ Voice AI",
  "📍 Tripura, India",
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          Student entrepreneur from{" "}
          <span className="about-highlight">Tripura, India</span> building
          AI-driven systems. I experiment with{" "}
          <span className="about-highlight">vibe coding</span> and{" "}
          <span className="about-highlight">AI-assisted development</span> using
          tools like <span className="about-accent">Claude Code</span> to
          rapidly prototype ideas.
        </p>

        <p className="para about-para2">
          Focused on creating practical{" "}
          <span className="about-highlight">AI products</span> for real-world
          businesses while learning{" "}
          <span className="about-highlight">sales</span>,{" "}
          <span className="about-highlight">marketing</span>, and{" "}
          <span className="about-highlight">storytelling</span>.
        </p>

        <div className="about-tags">
          {tags.map((tag, i) => (
            <span key={i} className="about-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
