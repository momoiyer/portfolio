import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      {/* include link with logo to go back to home */}
      <span className='nav-bar__name-logo'>Khin Mo Mo Zin</span>
      <ul>
        <li>about</li>
        <li>skills</li>
        <li>projects</li>
        <li>blogs</li>
        <li>contact</li>
        <li>resume</li>

        <li>
          <Image
            src="/day-and-night.png"
            alt="Picture of the day and night mode"
            width={50}
            height={50} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;