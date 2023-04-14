// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faMoonStars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  return (
    <nav>
      {/* include link with logo to go back to home */}
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Blog</li>
        <li>Contact Me</li>
        <li>View My Resume</li>

        <li>
          {/* <FontAwesomeIcon icon="fa-solid fa-coffee-pot" /> */}
          {/* <FontAwesomeIcon icon="fa-moon-stars" /> */}
          {/* <i className="fa-duotone fa-moon-stars"></i> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;