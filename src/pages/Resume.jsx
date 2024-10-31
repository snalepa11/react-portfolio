import "../App.css";
import pdf from "../components/Resume2024.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";

const languageArray = [
  { title: "HTML", percentage: "50" },
  { title: "JavaScript", percentage: "80" },
  { title: "React", percentage: "90" },
  { title: "JQuery", percentage: "70" },
  { title: "NoSQL", percentage: "75" },
  { title: "Express", percentage: "80" },
  { title: "PSQL", percentage: "60" },
  { title: "Node.js", percentage: "85" },
  { title: "MongoDB", percentage: "75" },
];
export default function Resume() {
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
