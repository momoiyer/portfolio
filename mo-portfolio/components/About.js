import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section light-background" id="about" >
      {/* title section */}
      <div className='about-section__title' data-aos="zoom-in">
        <h1>My Journey</h1>
        <p>Summary of my life, education and professional experiences</p>
      </div>

      <div className='about-section__item_list'>
        {/* journey item list */}
        <div className='about-section__item' data-aos="fade-down">
          {/* individual item */}
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/start.png"
                alt="start of journey"
                width={65}
                height={65} />
            </div>
            <div className='about-section__item-desc'>
              <p>{"I was born in Myanmar and have dreamed of emigrating to Canada after seeing beauty of the Canadian Rockies in the movie 'X-Men Origins: Wolverine'."}</p>
            </div>
          </div>
        </div>
        <div className='about-section__item about-section__item-left' data-aos="fade-down">
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/moving.png"
                alt="start of journey"
                width={55}
                height={55} />
              <Image
                src="/about-me/graduate.png"
                alt="start of journey"
                width={55}
                height={55} />
            </div>
            <div className='about-section__item-desc'>
              <p>Moved to Singapore. Graudated with BSc. in Information System & Software Engineering. Worked at IBM Datacenter supporting & supervising the IT Operation Team for 4 years.</p>
            </div>

          </div>
        </div>
        <div className='about-section__item' data-aos="fade-down">
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/student.png"
                alt="start of journey"
                width={55}
                height={55} />
              <Image
                src="/about-me/developer.png"
                alt="start of journey"
                width={55}
                height={55} />
            </div>
            <div className='about-section__item-desc'>
              <p>Started missing coding and went back to school to get a Graduate Diploma in Systems Analysis. Got my first developer job (Full Stack) that brought me so much exciement every single day for almost 3 years!</p>
            </div>
          </div>
        </div>
        <div className='about-section__item about-section__item-left' data-aos="fade-down">
          <div className='about-section__item-background'> <div className='about-section__item-image'>
            <Image
              src="/about-me/canada.png"
              alt="start of journey"
              width={55}
              height={55} />
            <Image
              src="/about-me/idea.png"
              alt="start of journey"
              width={55}
              height={55} />
          </div>
            <div className='about-section__item-desc'>
              <p>Finally migrated to my dream country, Canada! Started exploring the entrepreneur side of me and started an E-commerce business with Amazon. Achieved high customer rating and profit margin.</p>
            </div>
          </div>
        </div>
        <div className='about-section__item' data-aos="fade-down">
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/bootcamp.png"
                alt="start of journey"
                width={55}
                height={55} />
              <Image
                src="/about-me/volunteer.png"
                alt="start of journey"
                width={55}
                height={55} />
            </div>
            <div className='about-section__item-desc'>
              <p>After 2 years, realized my true passion will always be programming and joined a coding bootcamp to modernize my tech stack. Currently volunteering at a Calgary startup as a full-stack developer and lead of the front-end team.</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;

