import "../App.css";
import pdf from "../components/Resume2024.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";

const languageArray = [
  { title: "HTML", percentage: "50" },
  { title: "JavaScript", percentage: "80" },
];
export default function Resume() {
  const HTML = 50;
  const JavaScript = 80;
  const React = 90;
  const CSS = 30;
  return (
    <div>
      <h2>
        Download my{" "}
        <a href={pdf} target="_blank">
          Resume
        </a>
      </h2>
      {languageArray.map((language) => {
        return (
          <div>
            <p>{language.title}</p>
            <ProgressBar
              now={language.percentage}
              label={`${language.percentage}%`}
            />
          </div>
        );
      })}

      {/* <div class="left">
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
          <li>
            CSS
            <ProgressBar now={CSS} label={`${CSS}%`} />
          </li>
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
      </div> */}
    </div>
  );
}
