import Image from 'next/image';
import Link from 'next/link';

const Modal = () => {
  return (
    < div className="modal fade" id="project1Details" tabindex="-1" aria-labelledby="project1DetailsLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="project1DetailsLabel">Project Details</h2>
            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='modal-body__desc'>A mood management web app for daily journaling, habit tracking, and music suggestion to match the current mood.</p>
            <div className='modal-body__tech-stack'>
              <p>Tech Stack: </p>
              <div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/nodejs.png"
                    alt="Node.js Logo"
                    width={50}
                    height={30} />
                  <span className='language-desc'>Node.js</span>
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
                    src="/colored-logo/react.png"
                    alt="React Logo"
                    width={30}
                    height={30} />
                  <span className='language-desc'>React</span>
                </div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/sass.svg"
                    alt="SASS Logo"
                    width={30}
                    height={30} />
                  <span className='language-desc'>SASS</span>
                </div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/postgres.png"
                    alt="Postgres Logo"
                    width={30}
                    height={30} />
                  <span className='language-desc'>Postgres</span>
                </div>
              </div>
            </div>
            <div className='modal-body__api-lib'>
              <p>API & Libraries: </p>
              <div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/fullcalendar.png"
                    alt="React Full Calendar Logo"
                    width={30}
                    height={30} />
                  <span className='language-desc'>React Fullcalendar</span>
                </div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/draftjs.svg"
                    alt="Draft.js Logo"
                    width={30}
                    height={30} />
                  <span className='language-desc'>Darft.js</span>
                </div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/spotify.png"
                    alt="Draft.js Logo"
                    width={30}
                    height={30} />
                  <span className='language-desc'>Spotify API</span>
                </div>
                <div className='skill-section__languages-group'>
                  <Image
                    src="/colored-logo/weather.png"
                    alt="Draft.js Logo"
                    width={60}
                    height={30} />
                  <span className='language-desc'>Weather API</span>
                </div>
              </div>
            </div>
            <div className='modal-body__source-code'>
              <Link href="https://github.com/MoMoZin/MoJo" legacyBehavior>
                <a target="_blank" className='modal-body__source-code___git'>
                  <i className="fa-brands fa-github fa-lg"></i>
                  <span>View Source Code</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Modal;