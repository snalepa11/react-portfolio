import headshot from "../assets/headshot.jpeg";
import Button from "react-bootstrap/Button";
import pdf from "../components/Resume2024.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
import backgroundImage from "../assets/backgroundphoto1.jpg";
import github from "../assets/GH.jpeg";
import stack from "../assets/stack.png";
import LinkedIn from "../assets/LI.png";

export default function AboutMe() {
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
  return (
    <div>
      <div class="inline">
        <div class="bio">
          <h1>Sarah Nalepa</h1>
          <p>Software Developer | Product Manager</p>
          <p class="bold">Take a look at my Resume!</p>
          <Button variant="light outline-dark" href={pdf} target="_blank">
            Resume
          </Button>
        </div>
        <img class="margint" id="headshot" src={headshot} alt="headshot" />
      </div>
      <div>
        <h2>A Bit About Me</h2>
        <p>
          Hello and welcome to my webpage! My name is Sarah and I am an aspiring
          product manager. I graduated with a Bachelor's and Master's in
          International Relations and have previously worked in the not for
          profit space. I recently graduated from the Northwestern full-stack
          coding bootcamp where I learned the MERN stack. Since graduation I
          have continued to hone my coding abilities, as well sharpen my
          soft-skills. I believe my extensive background in communication-based
          studies and roles combined with my rapidly expanding technical
          knowledge will make me an asset to any team as a product manager.
        </p>
        <h2 class="left">Languages I know and how much I use them...</h2>
        {languageArray.map((language) => {
          return (
            <div>
              <p class="bold left">{language.title}</p>
              <ProgressBar
                // class="brown"
                now={language.percentage}
                label={`${language.percentage}%`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
