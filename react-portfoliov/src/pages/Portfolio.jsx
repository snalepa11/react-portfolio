import '../App.css'
import tree from '../assets/tree.jpeg'
import record from '../assets/record player.jpeg'
import linen from '../assets/linen.jpeg'
import tulips from '../assets/tulips.jpeg'

export default function Portfolio(){
    return (
        <div>
            <h1 class='left'>Portfolio</h1>
            <div class='flex'>
            <div>
                <img class = 'tree' src={tree} alt = "a palm tree by a white house" />
            </div>
            <div>
                <img class = 'tree' src={record} alt = "A blue record player" />
            </div>
            <div>
                <img class = 'tree' src = {linen} alt = "white curtains blowing in the wind" />
            </div>
            <div>
                <img class = 'tree' src = {tulips} alt = "white tulips in a brown paper bag" />
            </div>
            </div>
        </div>
    );
}