import Link from 'next/link';
import React, { useState } from "react";

const Nav = () => {

  const [navActive, setNavActive] = useState(false);
  // const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className='nav-bar'>
      <span><Link href={'#intro'} className='nav-bar__name-logo'>Khin Mo Mo Zin</Link></span>
      {/* <ul>
        <li><Link className='nav-bar__item' href={'#about'}>about</Link></li>
        <li><Link className='nav-bar__item' href={'#skills'}>skills</Link></li>
        <li><Link className='nav-bar__item' href={'#projects'}>projects</Link></li>
        <li><Link className='nav-bar__item' href={'#blogs'}>blogs</Link></li>
        <li><Link className='nav-bar__item' href={'#contact'}>contact</Link></li>
        <li><a className='nav-bar__item' target="_blank" href='https://flowcv.com/resume/gfw7e2wn1w'>resume</a></li>
      </ul> */}


      <div
        className={`nav-bar__menu-line ${navActive ? "active" : ""
          }`}
        onClick={() => {
          // setActiveIdx(idx);
          setNavActive(!navActive);
        }}
      >
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
      <div
        className={`nav-bar__menu-list ${navActive ? "active" : ""
          }`}
      >
        <ul>
          <li><Link className='nav-bar__item' href={'#about'}>about</Link></li>
          <li><Link className='nav-bar__item' href={'#skills'}>skills</Link></li>
          <li><Link className='nav-bar__item' href={'#projects'}>projects</Link></li>
          <li><Link className='nav-bar__item' href={'#blogs'}>blogs</Link></li>
          <li><Link className='nav-bar__item' href={'#contact'}>contact</Link></li>
          <li><a className='nav-bar__item' target="_blank" href='https://flowcv.com/resume/gfw7e2wn1w'>resume</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Nav;