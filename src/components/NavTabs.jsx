import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li>
        <Link
          className="link-stlye"
          to={"/"}
          style={{
            opacity: currentPage === '/' ? '1' : '0.7'
          }}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          className="link-stlye"
          to="/portfolio"
          style={{
            opacity: currentPage === '/portfolio' ? '1' : '0.7'
          }}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          className="link-stlye"
          to="/contact"
          style={{
            opacity: currentPage === '/contact' ? '1' : '0.7'
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
