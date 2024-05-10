import '../App.css'
import NavTabs from '../components/NavTabs';

export default function Header(){
    return (
        <div>
            <header class='flex'>
                <h1>Sarah Nalepa</h1>
                <NavTabs />
            </header>
        </div>
    );
}