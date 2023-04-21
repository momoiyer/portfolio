import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <section className="project-section  dark-background" id="projects">
      <div className='project-section__title' data-aos="fade-right">
        <p>WHAT I'VE DONE SO FAR</p>
        <h1>Portfolio</h1>
      </div>

      <div className="project-section__carousel" data-aos="flip-left">
        {/* <!-- Carousel wrapper --> */}
        <div id="project-carousel" className="carousel slide carousel-fade" data-mdb-ride="carousel">
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#project-carousel"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#project-carousel"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#project-carousel"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-mdb-target="#project-carousel"
              data-mdb-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-mdb-target="#project-carousel"
              data-mdb-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-mdb-target="#project-carousel"
              data-mdb-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner ">
            {/* <!-- Single item --> */}
            <div className="carousel-item active" data-mdb-interval="500000">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100" alt="Sunset Over the City" />
              {/* <div className="carousel-caption d-none d-md-block"> */}

              <div className="carousel-image-description" >
                <div>
                  <h2>MoJo</h2>
                  <p>Mood Management Web App</p>
                  <p>March 2023</p>
                </div>
                <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#project1Details">Click for full portfolio</button>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" data-aos="fade-left" />

              <div className="carousel-image-description" >
                <div>
                  <h2>Wiki Map</h2>
                  <p>Customized Maps with collection of points of interest</p>
                  <p>Feb 2023</p>
                </div>
                <button className='carousel-item__button'>Click for full portfolio</button>
              </div>
            </div>


            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea" />
              <div className="carousel-image-description" >
                <div>
                  <h2>Interview Scheduler</h2>
                  <p>Interview Scheduler between users and interviewers</p>
                  <p>March 2023</p>
                </div>
                <button className='carousel-item__button'>Click for full portfolio</button>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}

              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />

              <div className="carousel-image-description" >
                <div>
                  <h2>Twetter</h2>
                  <p>Twitter Clone Web App</p>
                  <p>Feb 2023</p>
                </div>
                <button className='carousel-item__button'>Click for full portfolio</button>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}

              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />

              <div className="carousel-image-description" >
                <div>
                  <h2>Moshify</h2>
                  <p>Front End Webiste Template for Business</p>
                  <p>Jan 2022</p>
                </div>
                <button className='carousel-item__button'>Click for full portfolio</button>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}

              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />

              <div className="carousel-image-description" >
                <div>
                  <h2>Phenix Movies</h2>
                  <p>Online Movie Rental Web App</p>
                  <p>April 2022</p>
                </div>
                <button className='carousel-item__button'>Click for full portfolio</button>
              </div>
            </div>

          </div>
          {/* <!-- Inner -->

        <!-- Controls --> */}
          <button className="carousel-control-prev" type="button" data-mdb-target="#project-carousel" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#project-carousel" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
      </div>




      {/* <!-- Modal --> */}
      <div className="modal fade" id="project1Details" tabindex="-1" aria-labelledby="project1DetailsLabel" aria-hidden="true">
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
            {/* <div className="modal-footer">
              <button type="button" className="modal-button" data-mdb-dismiss="modal">Close</button>
            </div> */}
          </div>
        </div>
      </div>
    </section >
  );

};

export default Project;

