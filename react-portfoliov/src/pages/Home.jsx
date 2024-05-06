import headshot from '../assets/headshot.jpeg'

export default function Home() {
    return (
      <div>
        <h1>About Me</h1>
        <img src={headshot} alt="headshot" />
        <p>
         Hello and welcome to my webpage! My name is Sarah and I am an aspiring software developer. I
        graduated with a Bachelor's and Master's in International Relations and have previously worked in
        the not for profit space. I am currently taking the Northwestern Full-Stack Bootcamp and look
        forward to a long and prosperous career in tech!
        </p>
      </div>
    );
  }