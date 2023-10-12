import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <section className="intro-section dark-background" id='intro' >
      {/* name intro section */}
      <div className='intro-section__desc' data-aos="zoom-out">
        <p>Hello! My name is</p>
        <h1 className='name'><span>M</span><span>o</span><span> M</span><span>o</span></h1>
        <p className='intro-section__desc__tagline'>{"I'm a software engineer who loves to turn problems into opportunities with technology!"}</p>
      </div >
      {/* image intro section with social icons */}
      <div className='intro-section__image' data-aos="flip-right">
        <Image
          src="/mo-portfolio.jpg"
          alt="Picture of me"
          width={450}
          height={570}
          className="d-block w-100 h-100" />

        <div className='intro-section__social'>
          <Link href="https://www.linkedin.com/in/momoiyer/" legacyBehavior>
            <a target="_blank" className='intro-section__social_item'>
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </Link>

          <Link href="https://github.com/momoiyer" legacyBehavior>
            <a target="_blank" className='intro-section__social_item'>
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </Link>

          <Link href="https://medium.com/@khinmomozin" legacyBehavior>
            <a target="_blank" className='intro-section__social_item'>
              <i className="fa-solid fa-blog fa-xl"></i>
            </a>
          </Link>

          <Link href="mailto:khinmomozin@gmail.com" legacyBehavior>
            <a target="_blank" className='intro-section__social_item'>
              <i className="fa-solid fa-envelope fa-xl"></i>
            </a>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default Intro;