import "../App.css";
import pdf from "../components/Resume2024.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";

// const languageArray = [
//   { title: "HTML", percentage: "50%" },
//   { title: "JavaScript", percentage: "80%" },
// ];
export default function Resume() {
  const HTML = 60;
  const JavaScript = 80;
  const React = 90;
  return (
    <div>
      {/* <p>{languageArray.title}</p>
      <ProgressBar label={`${languageArray.percentage}%`} /> */}

      <div class="left">
        <h2>
          Download my{" "}
          <a href={pdf} target="_blank">
            Resume
          </a>
        </h2>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>
            HTML
            <ProgressBar now={HTML} label={`${HTML}%`} />
          </li>
          <li>
            JavaScript
            <ProgressBar now={JavaScript} label={`${JavaScript}%`} />
          </li>
          <li>
            React
            <ProgressBar now={React} label={`${React}%`} />
          </li>
          <li>CSS</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>NoSQL</li>
          <li>Express</li>
          <li>PSQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
