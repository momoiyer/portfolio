import Image from 'next/image';

const Skill = () => {
  return (
    <section className="skill-section light-background" id='skills'>
      <div className='skill-section__title' data-aos="fade-up-right">
        <p>WHAT I CAN DO</p >
        <h1>Skills & Proficiencies</h1>
      </div>
      <div data-aos="zoom-in-up">
        <p>Languages</p>
        <div className='skill-section__languages'>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/js.svg"
              alt="Javascript Log"
              width={30}
              height={30} />
            <span className='language-desc'>Javascript</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/ruby.svg"
              alt="Ruby Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Ruby</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/css.svg"
              alt="Css Logo"
              width={30}
              height={30} />
            <span className='language-desc'>CSS</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/java.svg"
              alt="Java Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Java</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/android.svg"
              alt="Android Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Android</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/csharp.svg"
              alt="C# Logo"
              width={30}
              height={30} />
            <span className='language-desc'>C#</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/html5.svg"
              alt="HTML Logo"
              width={30}
              height={30} />
            <span className='language-desc'>HTML</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/php.svg"
              alt="PHP Logo"
              width={30}
              height={30} />
            <span className='language-desc'>PHP</span>
          </div>
        </div>

        <p>Frameworks & Libriries</p>
        <div className='skill-section__languages'>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/react.svg"
              alt="React Logo"
              width={30}
              height={30} />
            <span className='language-desc'>React</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/node.svg"
              alt="Node.js Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Node.js</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/rails.svg"
              alt="Rails Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Rails</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/jquery.svg"
              alt="JQuery Logo"
              width={30}
              height={30} />
            <span className='language-desc'>JQuery</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/express.svg"
              alt="Express Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Express</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/sass.svg"
              alt="SASS Logo"
              width={30}
              height={30} />
            <span className='language-desc'>SASS</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/bootstrap.png"
              alt="Bootstrap Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Bootstrap</span>
          </div>
        </div>

        <p>Database & Systems</p>
        <div className='skill-section__languages'>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/mysql.svg"
              alt="MySQL Log"
              width={30}
              height={30} />
            <span className='language-desc'>MySQL</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/postgres.svg"
              alt="Postgres Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Postgres</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/mongodb.png"
              alt="MongoDB Logo"
              width={30}
              height={30} />
            <span className='language-desc'>MongoDB</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/sqlite.svg"
              alt="SQLite Logo"
              width={30}
              height={30} />
            <span className='language-desc'>SQLite</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/graphql.svg"
              alt="GraphQL Logo"
              width={30}
              height={30} />
            <span className='language-desc'>GraphQL</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/sybase.png"
              alt="SQL Anywhere Logo"
              width={45}
              height={30} />
            <span className='language-desc'>SQL Anywhere</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/firebase.svg"
              alt="Firebase Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Firebase</span>
          </div>
        </div>

        <p>Testing</p>
        <div className='skill-section__languages'>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/mocha.png"
              alt="Mocha Log"
              width={30}
              height={30} />
            <span className='language-desc'>Mocha</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/chai.svg"
              alt="Chai Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Chai</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/jest.svg"
              alt="Jest Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Jest</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/cypress.png"
              alt="Cypress Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Cypress</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/storybook.svg"
              alt="Storybook Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Storybook</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/rspec.svg"
              alt="Rspec Logo"
              width={30}
              height={30} />
            <span className='language-desc'>Rspec</span>
          </div>
        </div>

        <p>CMS</p>
        <div className='skill-section__languages'>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/git.svg"
              alt="Git Log"
              width={30}
              height={30} />
            <span className='language-desc'>Git</span>
          </div>
          <div className='skill-section__languages-group'>
            <Image
              src="/skill-logo/svn.png"
              alt="SVN Logo"
              width={30}
              height={30} />
            <span className='language-desc'>SVN</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Skill;