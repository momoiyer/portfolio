import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <span><Link href={'#intro'} className='nav-bar__name-logo'>Khin Mo Mo Zin</Link></span>
      <ul>
        <li><Link className='nav-bar__item' href={'#about'}>about</Link></li>
        <li><Link className='nav-bar__item' href={'#skills'}>skills</Link></li>
        <li><Link className='nav-bar__item' href={'#projects'}>projects</Link></li>
        <li><Link className='nav-bar__item' href={'#blogs'}>blogs</Link></li>
        <li><Link className='nav-bar__item' href={'#contact'}>contact</Link></li>
        <li><a className='nav-bar__item' target="_blank" href='https://flowcv.com/resume/gfw7e2wn1w'>resume</a></li>
        {/* <li>
          <Image
            src="/day-and-night.png"
            alt="Picture of the day and night mode"
            width={50}
            height={50} />
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;