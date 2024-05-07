import '../App.css'
import github from '../assets/GH.jpeg'
import stack from '../assets/stack.png'
import LinkedIn from '../assets/LI.png'

export default function Footer(){
    return (
        <footer>
            <img src={github} alt='github logo'></img>
            <img src={stack} alt='stack overflow icon'></img>
            <img src={LinkedIn} alt='LinkedIn logo'></img>
        </footer>
    );
}