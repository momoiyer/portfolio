import Image from 'next/image';

const Skill = () => {
  return (
    <section className="skill-section  dark-background">
      <h1>These are my skills</h1>
      <p>Languages</p>
      <div className='skill-section__languages'>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/js.svg"
            alt="Javascript Log"
            width={30}
            height={30} />
          <span className='language-desc'>Javascript</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/ruby.svg"
            alt="Ruby Logo"
            width={30}
            height={30} />
          <span className='language-desc'>Ruby</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/css.svg"
            alt="Css Logo"
            width={30}
            height={30} />
          <span className='language-desc'>CSS</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/java.svg"
            alt="Java Logo"
            width={30}
            height={30} />
          <span className='language-desc'>Java</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/android.svg"
            alt="Android Logo"
            width={30}
            height={30} />
          <span className='language-desc'>Android</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/csharp.svg"
            alt="C# Logo"
            width={30}
            height={30} />
          <span className='language-desc'>C#</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/html5.svg"
            alt="HTML Logo"
            width={30}
            height={30} />
          <span className='language-desc'>HTML</span>
        </div>
        <div className='skill-section__languages-group'>
          <Image
            src="/language-logo/php.svg"
            alt="PHP Logo"
            width={30}
            height={30} />
          <span className='language-desc'>PHP</span>
        </div>






      </div>

    </section>
  );
};

export default Skill;