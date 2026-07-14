import backgroundPhoto from "../assets/backgroundphoto1.jpg";
import profilePhoto from "../assets/japansarah.jpeg";
import Button from "react-bootstrap/Button";
import pdf from "../components/SarahNalepaResume.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
import abs3 from "../assets/abs3.jpg";
import tree from "../assets/abstract.jpeg";
import redabs3 from "../assets/redabs3.jpg";
import sunabs from "../assets/sunabs.jpg";
import "../App.css";

export default function AboutMe() {
  const languageArray = [
    { title: "HTML", percentage: "80" },
    { title: "JavaScript", percentage: "80" },
    { title: "PowerBI", percentage: "80" },

    { title: "Tableau", percentage: "90" },
    { title: "SQL", percentage: "99" },
    { title: "Python", percentage: "95" },
    { title: "React", percentage: "90" },
    { title: "JQuery", percentage: "60" },
    { title: "Asana", percentage: "90" },

    { title: "PSQL", percentage: "80" },
    { title: "Node.js", percentage: "50" },
    { title: "Notion", percentage: "99" },
  ];

  return (
    <div className="about-page-container">
      {/* Sticky Left Hero Section */}
      <div className="hero-sidebar-sticky">
        <div className="hero-image-grid">
          <img className="hero-image" src={sunabs} alt="Portfolio image 1" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">SARAH NALEPA</h1>
          <div>
            <p className="hero-subtitle">
              Bridging business goals, user needs, and technical solutions.
            </p>

            <p className="hero-cta">
              Take a look at my Resume! <span className="arrow-icon">→</span>
            </p>
            <Button
              variant="outline-light"
              href={pdf}
              target="_blank"
              style={{
                borderColor: "#fff",
                color: "#fff",
                padding: "12px 30px",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scrollable Right Content with Background Image */}
      <div className="content-scrollable-right">
        {/* Profile Photo Section */}
        <div className="profile-photo-section">
          <img
            src={profilePhoto}
            alt="Sarah Nalepa"
            className="profile-photo-framed"
          />
        </div>

        <div
          className="bio-with-background"
          style={{ backgroundImage: `url(${backgroundPhoto})` }}
        >
          <div className="hero-bio-overlay">
            <div className="bio-content">
              <h3>A Bit About Me</h3>
              <p>
                Hello and welcome to my webpage! My name is Sarah, and I am a
                Product Manager with a multidisciplinary background spanning
                product development, operations, legal administration, and
                user-centered problem solving. I hold both a Bachelor's and
                Master's degree in International Relations, where I developed
                strong research, analytical, and communication skills while
                studying complex global, social, and economic challenges.
              </p>
              <br />
              <p>
                What sets me apart as a product manager is my ability to combine
                analytical thinking with empathy. Through my experience as an
                Associate Product Manager and my Data Analytics Fellowship, I've
                conducted market research, gathered and prioritized
                requirements, translated business needs into actionable product
                specifications, and leveraged Python, SQL, and Tableau to turn
                data into insights that drive decision-making. My background in
                legal operations and executive support strengthened my ability
                to manage competing priorities, communicate with stakeholders at
                every level, and bring structure to complex, fast-moving
                projects. Whether I'm interviewing users, analyzing product
                performance, or coordinating cross-functional teams, I enjoy
                bringing clarity to ambiguity and ensuring every decision is
                grounded in both data and user needs.
              </p>
              <br />
              <p>
                Beyond my technical and professional experience, I bring a
                growth mindset that has shaped every stage of my career. I've
                never been afraid to step into unfamiliar territory, whether
                that meant transitioning from international relations into
                technology, building award-winning applications, or continuously
                expanding my analytical skill set. I believe the best product
                managers are lifelong learners who ask thoughtful questions,
                embrace feedback, and remain relentlessly focused on improving
                the customer experience. I thrive in collaborative environments
                where curiosity is encouraged, and I'm excited to contribute
                that mindset to a team building products that make a meaningful
                impact.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "40px",
              textAlign: "left",
              maxWidth: "1200px",
              margin: "0 auto 40px",
              letterSpacing: "1px",
            }}
          >
            LANGUAGES & TECHNOLOGIES
          </h2>
          <div className="skills-grid">
            {languageArray.map((language, index) => {
              return (
                <div key={index} className="skill-item">
                  <p>{language.title}</p>
                  <div className="skill-progress-bar">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${language.percentage}%` }}
                    >
                      <span className="skill-percentage">
                        {language.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
