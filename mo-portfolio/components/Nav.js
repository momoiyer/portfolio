import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      {/* include link with logo to go back to home */}
      <span className='nav-bar__name-logo'><a href='/'>Khin Mo Mo Zin</a></span>
      <ul>
        <li><a href='/about'>about</a> </li>
        <li><a href='/about'>skills</a></li>
        <li><a href='/about'>projects</a></li>
        <li><a href='/about'>blogs</a></li>
        <li><a href='/about'>contact</a></li>
        <li><a href='https://flowcv.com/resume/gfw7e2wn1w'>resume</a></li>
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