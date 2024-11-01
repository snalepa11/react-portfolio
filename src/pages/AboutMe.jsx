import headshot from "../assets/headshot.jpeg";
import Button from "react-bootstrap/Button";

export default function AboutMe() {
  return (
    <div>
      <div class="inline">
        <div class="bio margint">
          <h2>A Bit About Me</h2>
          <p>
            Hello and welcome to my webpage! My name is Sarah and I am an
            aspiring product manager. I graduated with a Bachelor's and Master's
            in International Relations and have previously worked in the not for
            profit space. I recently graduated from the Northwestern full-stack
            coding bootcamp where I learned the MERN stack. Since graduation I
            have continued to hone my coding abilities, as well sharpen my
            soft-skills. I believe my extensive background in
            communication-based studies and roles combined with my rapidly
            expanding technical knowledge will make me an asset to any team as a
            product manager.
          </p>
          <p>Take a look at my Resume!</p>
          <Button variant="light outline-dark" href="#">
            Resume
          </Button>
        </div>
        <img class="margint" id="headshot" src={headshot} alt="headshot" />
      </div>
    </div>
  );
}
