import "../App.css";
import abs3 from "../assets/abs3.jpg";
import linen from "../assets/linen.jpeg";
// import tulips from "../assets/tulips.jpeg";
import paint from "../assets/paint.jpeg";
import shells from "../assets/stationary.jpeg";

export default function Portfolio() {
  const projects = [
    {
      title: "PROFOUND\nLEADERSHIP\nWEBSITE",
      client: "Profound Leadership",
      type: "Website",
      by: "Sarah Nalepa",
      description:
        "A comprehensive non-profit website built with Typescript. This strategy focused on creating an intuitive user interface while honoring the client's branding. The website allows the user to clearly undersatnd teh non-profit mission and contact the business owner for inquiries",
      image: abs3,
      link: "https://profoundleadership.org/",
      ctaText: "Have a look at the website",
    },
    {
      title: "BREEZI",
      client: "Bllomberg Hackathon",
      type: "Typescript iOS application",
      by: "Sarah Nalepa",
      description:
        "Breezi is a TypeScript-based iOS application that empowers New Yorkers to make informed decisions using real-time weather and air quality data. The app features location-based AQI insights, historical weather comparisons, and an AI-powered chatbot that delivers personalized recommendations for outdoor activities and health-conscious planning.",
      image: linen,
      link: "https://github.com/snalepa11/Breezi",
      ctaText: "Explore Project",
    },
    {
      title: "GUN\nVIOLENCE\nANALYTICS\nREPORT",
      client: "The Knowledge House",
      type: "Data Analysis",
      by: "Sarah Nalepa",
      description:
        "Analyzed historical NYPD shooting incident data using Python to uncover trends in location, demographics, and incident frequency across New York City. Developed interactive visualizations and data-driven insights to identify patterns that can support informed discussions around public safety and resource allocation.",
      image: paint,
      link: "https://github.com/jenellecodes/NYPD-Shooting-Incident-Data-Analysis",
      ctaText: "Explore Analysis",
    },
    {
      title: "CIVIC\nBRIDGE",
      client: "MasterCard Hackathon",
      type: "Web3 iOS Application",
      by: "Sarah Nalepa",
      description:
        "This application was designed to help bridge the gap between unbanked individuals and the modern financial system. By leveraging Web3 technology and data-driven insights, it aims to reduce barriers to financial access—particularly for those deterred by traditional banking fees such as overdraft charges and minimum balance requirements—and provide a more inclusive pathway to financial services.",
      image: paint,
      link: "https://github.com/snalepa11/first-step",
      ctaText: "View Repository",
    },
    {
      title: "PYTHON\nEDA",
      client: "The Knowledge House",
      type: "Data Analysis",
      by: "Sarah Nalepa",
      description:
        "This project explores consumer shopping behavior through data analysis, revealing trends in purchasing habits, demographics, and product preferences. By combining data cleaning, exploratory analysis, and visualization, it demonstrates how businesses can leverage customer data to improve decision-making and enhance the shopping experience.",
      image: shells,
      link: "https://github.com/snalepa11/shopping-behavior-",
      ctaText: "Explore Analysis",
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
                  <div
                    className="card-meta"
                    style={{ opacity: 1, marginBottom: "40px" }}
                  >
                    <span>{project.client}</span>
                    <span>{project.type}</span>
                    <span>{project.by}</span>
                    <span>Developer</span>
                  </div>
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-description">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    {project.ctaText} →
                  </a>
                </div>
                <img
                  className="card-image"
                  src={project.image}
                  alt={project.client}
                />
              </>
            ) : (
              <>
                <img
                  className="card-image"
                  src={project.image}
                  alt={project.client}
                />
                <div className="card-content">
                  <div className="card-meta">
                    <span>CLIENT NAME</span>
                    <span>PROJECT TYPE</span>
                  </div>
                  <div
                    className="card-meta"
                    style={{ opacity: 1, marginBottom: "40px" }}
                  >
                    <span>{project.client}</span>
                    <span>{project.type}</span>
                  </div>
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-description">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
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
