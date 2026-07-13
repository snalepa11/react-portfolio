import "../App.css";
import github from "../assets/GH.jpeg";
import LinkedIn from "../assets/LI.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Sarah Nalepa. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/snalepa11"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-nalepa-68999a161/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}
