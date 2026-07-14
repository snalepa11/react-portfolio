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
import { useState, useEffect, useRef } from "react";

export default function AboutMe() {
  const [visibleBars, setVisibleBars] = useState({});
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleBars((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.5 },
    );

    const skillItems = skillsRef.current?.querySelectorAll(".skill-item");
    skillItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
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
              Take a look at my Resume!
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
                Hello and welcome! My name is Sarah, and I'm someone who has
                always believed that growth comes from embracing new
                experiences. Throughout my career, I've had the opportunity to
                work in nonprofit outreach, program coordination, executive
                administration, legal operations, data analytics, and
                technology. While my path may not have been traditional, each
                role has taught me something valuable and helped me build a
                diverse set of skills.
              </p>
              <br />
              <p>
                One thing that has remained constant throughout my journey is my
                curiosity. I genuinely enjoy understanding how things work,
                identifying opportunities for improvement, and finding practical
                solutions to complex problems. Whether I'm analyzing data with
                Python, SQL, and Tableau, conducting research, organizing
                large-scale projects, or collaborating with cross-functional
                teams, I love bringing structure to ambiguity and helping ideas
                become reality. My experiences have strengthened my ability to
                think analytically, communicate effectively, adapt quickly, and
                build meaningful relationships with people from diverse
                backgrounds.
              </p>
              <br />
              <p>
                Growing up, my father always told me, "When you're young, try
                everything. Figure out what you like, what you don't like, and
                don't ever let fear stop you from trying something new." Those
                words have guided every step of my career. They've encouraged me
                to step outside my comfort zone, continuously learn new skills,
                and embrace opportunities that challenge me. Today, I approach
                every new experience with resilience, curiosity, and the belief
                that there's always something new to learn. I hope this
                portfolio gives you a glimpse into that journey, and I
                appreciate you taking the time to explore my work.
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
          <div className="skills-grid" ref={skillsRef}>
            {languageArray.map((language, index) => {
              return (
                <div key={index} className="skill-item" data-index={index}>
                  <p>{language.title}</p>
                  <div className="skill-progress-bar">
                    <div
                      className="skill-progress-fill"
                      style={{
                        width: visibleBars[index]
                          ? `${language.percentage}%`
                          : "0%",
                        transition: "width 1s ease-out",
                      }}
                    >
                      <span className="skill-percentage">
                        {visibleBars[index] ? `${language.percentage}%` : ""}
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
