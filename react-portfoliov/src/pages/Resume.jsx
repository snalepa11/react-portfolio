import '../App.css'
import pdf from '../components/Resume2024.pdf'
export default function Resume() {
    return (
        <div>
            <h1 class="left">Resume</h1>
            <div class="left">
                <h2>Download my <a href= {pdf} target='_blank'>Resume</a></h2>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>React</li>
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