//Copy and paste from activities 
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

/*
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
*/
function NavTabs() {
  // const currentPage = useLocation().pathname;

  return (
  <div>
      <Button variant="success">Success</Button>
  </div>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link
    //       to="/AboutMe"
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       // className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About Me
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Portfolio"
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       // className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Portfolio
    //     </Link>
    //   </li>      
    //   <li className="nav-item">
    //     <Link
    //       to="/Contact"
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       // className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Resume"
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       // className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </Link>
    //   </li>
    // </ul>
  );
}

export default NavTabs;