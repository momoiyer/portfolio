import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section light-background" id="about" >
      <div className='about-section__title' data-aos="zoom-in">
        <h1>My Journey</h1>
        <p>Summary of my life, education and professional experience</p>
      </div>

      <div className='about-section__item_list'>
        <div className='about-section__item' data-aos="fade-down">
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/start.png"
                alt="start of journey"
                width={65}
                height={65} />
            </div>
            {/* <p>1993-2009</p> */}
            <div className='about-section__item-desc'>
              {/* <h3>1993-2009</h3> */}
              <p>Born in Myanmar and been dreaming of migrating to Canada after seeing beautiful scenery in the movie 'X-Men Origins: Wolverine'.</p>
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
            {/* <p>2009-2017</p> */}
            <div className='about-section__item-desc'>
              <p>Migrated to Singapore. Graudated with BSc. in Information System & Software Engineering. Worked at IBM Datacenter supporting & supervising the IT Operation Team for 4 years.</p>
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
            {/* <p>2017-2020</p> */}
            <div className='about-section__item-desc'>
              <p>Started missing coding and went back to school to get Graduate Diploma in Systems Analysis. Got the first developer job (Full Stack) that brought so much exciement every single day for 3 years!</p>
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
            {/* <p>2020-2023</p> */}
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
            {/* <p>2013-present</p> */}
            <div className='about-section__item-desc'>
              <p>After 3 years, realized that my true passion will always be programming and joined bootcamp to modernize my tech stack. Currently volunteering at Calgary startup as a full stack developer and lead of the front-end team.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className='dash-1' data-aos="fade-down">
        <Image
          src="/about-me/dash3.png"
          alt="start of journey"
          width={150}
          height={180} />
      </div>
      <div className='dash-2' data-aos="fade-down">
        <Image
          src="/about-me/dash2.png"
          alt="start of journey"
          width={160}
          height={160} />
      </div>

      <div className='dash-3' data-aos="fade-down">
        <Image
          src="/about-me/dash1.png"
          alt="start of journey"
          width={180}
          height={200} />
      </div>
      <div className='dash-4' data-aos="fade-down">
        <Image
          src="/about-me/dash2.png"
          alt="start of journey"
          width={160}
          height={160} />
      </div> */}

    </section >
  );
};

export default About;

