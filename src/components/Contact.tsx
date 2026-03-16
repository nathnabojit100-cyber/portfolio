import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        {/* Call-To-Action Banner */}
        <div className="contact-cta">
          <h2 className="contact-cta-heading">
            Interested in collaborating or mentoring?
          </h2>
          <a
            href="mailto:nathnabojit100@gmail.com"
            className="contact-cta-btn"
            data-cursor="disable"
          >
            nathnabojit100@gmail.com <MdArrowOutward />
          </a>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:nathnabojit100@gmail.com" data-cursor="disable">
                nathnabojit100@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Kamalpur Govt. English Medium Higher Secondary School (CBSE)</p>
            <p style={{ fontSize: "0.85em", opacity: 0.7, marginTop: "0.25rem" }}>
              Class 10: 82% (2025) · Class 12: Currently Pursuing
            </p>
          </div>
          <div className="contact-box">
            <h4>Achievements</h4>
            <p style={{ marginBottom: "0.5rem" }}>
              🏆 2nd Place – District Science Seminar (2023)
            </p>
            <p>
              🚀 NIT Ideathon Participant (2026) – AI Receptionist Project
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Nabojit Nath</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

