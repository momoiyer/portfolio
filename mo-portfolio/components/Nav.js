// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoonStars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  console.log("faMoonStars: ", faMoonStars);
  return (
    <nav className='nav-bar'>
      {/* include link with logo to go back to home */}
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Blog</li>
        <li>Coffee Chat</li>
        <li>View Resume</li>

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