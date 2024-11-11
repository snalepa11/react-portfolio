import "../App.css";
import github from "../assets/GH.jpeg";
import stack from "../assets/stack.png";
import LinkedIn from "../assets/LI.png";

export default function Footer() {
  return (
    <div class="margint">
      <footer>
        <a href="https://github.com/snalepa11">
          <img src={github} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/sarah-nalepa-68999a161/">
          <img src={LinkedIn} alt="LinkedIn logo"></img>
        </a>
      </footer>
    </div>
  );
}
