import '../App.css'
import tree from '../assets/tree.jpeg'
import record from '../assets/record player.jpeg'
import linen from '../assets/linen.jpeg'
import tulips from '../assets/tulips.jpeg'
import paint from '../assets/paint.jpeg'
import shells from '../assets/stationary.jpeg'

export default function Portfolio(){
    return (
        <div class='margint'>
            <h1 class='left'>Portfolio</h1>
            <div class='flex-wrap'>
            <div >
                <a href='https://github.com/snalepa11/Note-taker'><img class = 'tree' src={tree} alt = "a palm tree by a white house" /></a>
                <figcaption class='fig'>Express Note Taker</figcaption>
            </div>
            <div>
               <a href='https://github.com/snalepa11/sql-employee-tracker'> <img class = 'tree' src={record} alt = "A blue record player" /></a>
               <figcaption class ='fig'>PSQL Employee Tracker</figcaption>
            </div>
            <div>
                <a href='https://github.com/snalepa11/SVG-logo-maker'><img class = 'tree' src = {linen} alt = "white curtains blowing in the wind" /></a>
                <figcaption class='fig'>Node.js SVG Logo Maker</figcaption>
            </div>
            <div>
                <a href='https://github.com/snalepa11/random-password-generator'><img class = 'tree' src = {tulips} alt = "white tulips in a brown paper bag" /></a>
                <figcaption class='fig'>Random Password Generator</figcaption>
            </div>
            <div>
                <a href='https://github.com/snalepa11/ORM-Ecommerce'><img class = 'tree' src={paint} alt = 'blue paint smeared on white canvas'/></a>
                <figcaption class='fig'>ORM E-Commerce Website</figcaption>
            </div>
            <div>
            <a href='https://github.com/snalepa11/weather-app'><img class = 'tree' src={shells} alt = 'cream scattered stationary'/></a>
                <figcaption class='fig'>API Weather App</figcaption>
            </div>
            </div>
        </div>
    );
}