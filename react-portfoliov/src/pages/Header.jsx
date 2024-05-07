import '../App.css'

export default function Header(){
    return(
        <header class='flex'>
         <h1>Sarah Nalepa</h1>
         <ul class='flex' id='header'>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
         </ul>
        </header>
    );
}