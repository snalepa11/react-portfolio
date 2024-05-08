import '../App.css'

export default function Header(){
    return(
        <div>
        <header class='flex'>
         <h1>Sarah Nalepa</h1>
         <div>
         <ul class='flex' id='header'>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
         </ul>
         </div>
        </header>
        </div>
    );
}