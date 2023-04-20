import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section light-background" data-aos="zoom-in">
      <div className='about-section__title'>
        <h1>My Journey</h1>
      </div>

      <div className='about-section__item_list'>
        <div className='about-section__item'>
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/start.png"
                alt="start of journey"
                width={70}
                height={70} />
            </div>
            <div>
              <h3>1993-2019</h3>
              <p>Born in Myanmar and been dreaming to migrate to Canada</p>
            </div>
          </div>
        </div>
        <div className='about-section__item about-section__item-left'>
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/moving.png"
                alt="start of journey"
                width={50}
                height={50} />
              <Image
                src="/about-me/graduate.png"
                alt="start of journey"
                width={50}
                height={50} />
            </div>
            <div>
              <h3>1993-2019</h3>
              <p>Born in Myanmar and been dreaming to migrate to Canada</p>
            </div>

          </div>
        </div>
        <div className='about-section__item'>
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/student.png"
                alt="start of journey"
                width={50}
                height={50} />
              <Image
                src="/about-me/developer.png"
                alt="start of journey"
                width={50}
                height={50} />
            </div>
            <div>
              <h3>1993-2019</h3>
              <p>Born in Myanmar and been dreaming to migrate to Canada</p>
            </div>
          </div>
        </div>
        <div className='about-section__item about-section__item-left'>
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/canada.png"
                alt="start of journey"
                width={50}
                height={50} />
              <Image
                src="/about-me/idea.png"
                alt="start of journey"
                width={50}
                height={50} />
            </div>
            <div>
              <h3>1993-2019</h3>
              <p>Born in Myanmar and been dreaming to migrate to Canada</p>
            </div>

          </div>
        </div>
        <div className='about-section__item'>
          <div className='about-section__item-background'>
            <div className='about-section__item-image'>
              <Image
                src="/about-me/bootcamp.png"
                alt="start of journey"
                width={50}
                height={50} />
              <Image
                src="/about-me/volunteer.png"
                alt="start of journey"
                width={50}
                height={50} />
            </div>
            <div>
              <h3>1993-2019</h3>
              <p>Born in Myanmar and been dreaming to migrate to Canada</p>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default About;