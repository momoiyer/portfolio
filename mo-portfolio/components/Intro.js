import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (

    <section className="intro-section dark-background" id='intro' >
      <div className='intro-section__desc' data-aos="zoom-out">
        <p><span className="hello">Hello! </span>My name is</p>
        <h1 className='name'>Mo Mo.</h1>
      </div >
      <div className='intro-section__image' data-aos="flip-right">
        <Image
          src="/mo-portfolio.jpg"
          alt="Picture of me"
          width={450}
          height={570}
          className="d-block w-100 h-100" />

        <div className='intro-section__social'>
          <Link href="https://www.linkedin.com/in/khinmomozin/" legacyBehavior>
            <a target="_blank" className='intro-section__social_item'>
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </Link>

          <Link href="https://github.com/MoMoZin" legacyBehavior>
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
      <div className='intro-section__tagline' data-aos="zoom-out">
        <p> I'm a software engineer who loves to turn problems into opportunities with technology!</p>
      </div>
    </section >
  );
};

export default Intro;