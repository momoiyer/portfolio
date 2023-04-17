import Image from 'next/image';

const Intro = () => {
  return (
    <section className="intro-section dark-background" data-aos="fade-down-right">
      <div className='intro-section__desc'>
        <p>Hello! My name is</p>
        <p><span className='name'>mo mo.</span></p>
        <p> I'm a <span className='special-text'>software engineer</span> who loves to<span className='special-text'> turn problems into opportunities with technology!</span></p>
      </div >
      <div className='intro-section__image'>
        <Image
          src="/mo-portfolio.jpg"
          alt="Picture of me"
          width={300}
          height={370} />
      </div>
      <div className='intro-section__social'>
        <i className="fa-brands fa-linkedin fa-lg"></i>
        <i className="fa-brands fa-github fa-lg"></i>
        <i className="fa-solid fa-blog fa-lg"></i>
        <i className="fa-solid fa-envelope fa-lg"></i>
      </div>
    </section >
  );
};

export default Intro;