import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section light-background" data-aos="zoom-in">
      <div className='about-section__title'>
        <h1>My Journey</h1>
        <p>Summary of my life, education and professional experience</p>
      </div>

      <div className='about-section__item_list'>
        <div className='about-section__item'>
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
              <p>Born in Myanmar and been dreaming of migrating to Canada after seeing beautiful scenery in the movie 'X-Men Origins: Wolverine'</p>
            </div>
          </div>
        </div>
        <div className='about-section__item about-section__item-left'>
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
              <p>Migrated to Singapore. Graudated with BSc. in IT & Software Engineering. Worked in IBM Datacenter supporting & supervising the IT Operation Team for 4 years</p>
            </div>

          </div>
        </div>
        <div className='about-section__item'>
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
              <p>Started missing coding and went back to school to get Graduate Diploma in Systems Analysis. Got the first full stack developer job that brought so much exciement every day for 3 years!</p>
            </div>
          </div>
        </div>
        <div className='about-section__item about-section__item-left'>
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
              <p>Finally migrated to my dream country! Taking advantage of new found freedom, started exploring the entrepreneur side of me and started an E-commerce business with Amazon. Achieved high customer rating and profit margin.</p>
            </div>
          </div>
        </div>
        <div className='about-section__item'>
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
              <p>After 3 years, started missing my true passion of programming and joined bootcamp to modernize my tech stack. Currently volunteering at Calgary startup as a full stack developer and team lead of the front-end team.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='dash-1'>
        <Image
          src="/about-me/dash3.png"
          alt="start of journey"
          width={150}
          height={180} />
      </div>
      <div className='dash-2'>
        <Image
          src="/about-me/dash2.png"
          alt="start of journey"
          width={160}
          height={160} />
      </div>

      <div className='dash-3'>
        <Image
          src="/about-me/dash1.png"
          alt="start of journey"
          width={180}
          height={200} />
      </div>
      <div className='dash-4'>
        <Image
          src="/about-me/dash2.png"
          alt="start of journey"
          width={160}
          height={160} />
      </div>

      {/* <Image
        src="/about-me/frame.png"
        alt="start of journey"
        width={420}
        height={120} /> */}
      {/* <div>
        <Image
          src="/about-me/start.png"
          alt="start of journey"
          width={70}
          height={70} />
        <p>Born in Myanmar and been dreaming to migrate to Canada since after watching The Wolverine Origin </p>
      </div>
      <div>
        <Image
          src="/about-me/moving.png"
          alt="move to singapore"
          width={70}
          height={70} />
        <p>Migrated to Singapore to continue University (never spoken in English in my life before) </p>
      </div>
      <div>
        <Image
          src="/about-me/graduated.png"
          alt="graduated"
          width={70}
          height={70} />
        <p>Graduated with Bachelor in Information System and Software Engineering </p>
      </div>
      <div>
        <Image
          src="/about-me/ibm.png"
          alt="first job"
          width={70}
          height={70} />
        <p>Worked in IBM Datacenter supporting the IT Operation Team for 4 years  </p>
      </div>
      <div>
        <Image
          src="/about-me/student.png"
          alt="system analyst"
          width={70}
          height={70} />
        <p>Started missing coding and back to school to get Graduate Diploma in Systems Analysis</p>
      </div>
      <div>
        <Image
          src="/about-me/developer.png"
          alt="developer"
          width={70}
          height={70} />
        <p>First development job that brought so much exciement every single day for 3 years! </p>
      </div>
      <div>
        <Image
          src="/about-me/canada.png"
          alt="migrate to canada"
          width={70}
          height={70} />
        <p>Finally migrated to my dream country! </p>
      </div>
      <div>
        <Image
          src="/about-me/idea.png"
          alt="entrepreneur journey"
          width={70}
          height={70} />
        <p>Taking advantage of new found freedom, started exploring the entrepreneur side of me </p>
      </div>
      <div>
        <Image
          src="/about-me/amazon.png"
          alt="Amazon journey"
          width={70}
          height={70} />
        <p>Started an E-commerce family startup business with Amazon and achieve high customer rating and profit margin </p>
      </div>
      <div>
        <Image
          src="/about-me/lighthouselabs.jpg"
          alt="LHL journey"
          width={70}
          height={70} />
        <p>After 3 years, started missing my true passion of programming and joined LHL to modernize my tech stack</p>
      </div>
      <div>
        <Image
          src="/about-me/volunteer.png"
          alt="Volunteer journey"
          width={70}
          height={70} />
        <p>Currently volunteering at local startup as a full stack developer and team lead of the front-end web team</p>
      </div> */}
    </section >
  );
};

export default About;

