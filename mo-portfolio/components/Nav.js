import Link from 'next/link';
import React, { useState } from "react";

const Nav = () => {

  // responsive menu indicator
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className='nav-bar'>
      {/* logo */}
      <span><Link href={'#intro'} className='nav-bar__name-logo'>Khin Mo Mo Zin</Link></span>
      {/* responsive menu */}
      <div
        className={`nav-bar__menu-line ${navActive ? "active" : ""
          }`}
        onClick={() => {
          setNavActive(!navActive);
        }}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      {/* menu items */}
      <div className={`nav-bar__menu-list ${navActive ? "active" : ""}`}>
        <ul>
          <li><Link
            className='nav-bar__item'
            onClick={() => { setNavActive(false); }}
            href={'#about'}
          >about</Link></li>
          <li><Link
            className='nav-bar__item'
            onClick={() => { setNavActive(false); }}
            href={'#skills'}>skills</Link></li>
          <li><Link
            className='nav-bar__item'
            onClick={() => { setNavActive(false); }}
            href={'#projects'}>projects</Link></li>
          <li><Link
            className='nav-bar__item'
            onClick={() => { setNavActive(false); }}
            href={'#blogs'}>blogs</Link></li>
          <li><Link
            className='nav-bar__item'
            onClick={() => { setNavActive(false); }}
            href={'#contact'}>contact</Link></li>
          <li><a
            className='nav-bar__item'
            onClick={() => { setNavActive(false); }}
            target="_blank" href='https://flowcv.com/resume/gfw7e2wn1w'>resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;