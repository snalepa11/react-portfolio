import "../App.css";
import tree from "../assets/abstract.jpeg";
import linen from "../assets/linen.jpeg";
import tulips from "../assets/tulips.jpeg";
import paint from "../assets/paint.jpeg";
import shells from "../assets/stationary.jpeg";

export default function Portfolio() {
  const projects = [
    {
      title: "SOCIAL MEDIA\nSTRATEGY",
      client: "Express Note Taker",
      type: "Full-Stack Application",
      by: "Sarah Nalepa",
      description:
        "A comprehensive note-taking application built with Express.js. This strategy focused on creating an intuitive user interface with persistent data storage. The application allows users to create, read, and manage notes effectively with a clean, minimalist design approach.",
      image: tree,
      link: "https://github.com/snalepa11/Note-taker",
      ctaText: "View on GitHub",
    },
    {
      title: "PRO-\nPOSAL",
      client: "SVG Logo Maker",
      type: "Node.js CLI Tool",
      by: "Sarah Nalepa",
      description:
        "A command-line application for generating custom SVG logos. This proposal-driven project demonstrates proficiency in Node.js, inquirer for user input, and SVG generation. Users can create professional logos by selecting shapes, colors, and text through an interactive CLI.",
      image: linen,
      link: "https://github.com/snalepa11/SVG-logo-maker",
      ctaText: "Explore Project",
    },
    {
      title: "ANALYTICS\nREPORT",
      client: "Random Password Generator",
      type: "Frontend Web App",
      by: "Sarah Nalepa",
      description:
        "A secure password generation tool that creates randomized passwords based on user-selected criteria. This analytics-driven application features customizable length and character type options, demonstrating strong understanding of JavaScript logic and DOM manipulation.",
      image: tulips,
      link: "https://snalepa11.github.io/random-password-generator/",
      ctaText: "View Live Demo",
    },
    {
      title: "E-COMMERCE\nPLATFORM",
      client: "ORM E-Commerce",
      type: "Backend API",
      by: "Sarah Nalepa",
      description:
        "A robust back-end e-commerce platform utilizing Object-Relational Mapping (ORM) with Sequelize. Features include product management, category organization, and tag associations. Built with Express.js and MySQL to demonstrate RESTful API design and database relationships.",
      image: paint,
      link: "https://github.com/snalepa11/ORM-Ecommerce",
      ctaText: "View Repository",
    },
    {
      title: "WEATHER\nAPP",
      client: "API Weather Application",
      type: "Frontend Integration",
      by: "Sarah Nalepa",
      description:
        "A dynamic weather application that integrates third-party API data to provide real-time weather information. Features include city search functionality, current conditions display, and multi-day forecasts. Demonstrates API integration and asynchronous JavaScript.",
      image: shells,
      link: "https://snalepa11.github.io/weather-app/",
      ctaText: "Launch App",
    },
  ];

  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <h1 className="portfolio-title">PORTFOLIO</h1>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            {index % 2 === 0 ? (
              <>
                <div className="card-content">
                  <div className="card-meta">
                    <span>CLIENT NAME</span>
                    <span>PROJECT TYPE</span>
                    <span>CREATED BY</span>
                    <span>ROLE</span>
                  </div>
                  <div className="card-meta" style={{ opacity: 1, marginBottom: '40px' }}>
                    <span>{project.client}</span>
                    <span>{project.type}</span>
                    <span>{project.by}</span>
                    <span>Developer</span>
                  </div>
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-description">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                    {project.ctaText} →
                  </a>
                </div>
                <img className="card-image" src={project.image} alt={project.client} />
              </>
            ) : (
              <>
                <img className="card-image" src={project.image} alt={project.client} />
                <div className="card-content">
                  <div className="card-meta">
                    <span>CLIENT NAME</span>
                    <span>PROJECT TYPE</span>
                  </div>
                  <div className="card-meta" style={{ opacity: 1, marginBottom: '40px' }}>
                    <span>{project.client}</span>
                    <span>{project.type}</span>
                  </div>
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-description">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                    {project.ctaText} →
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
