import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <section className="project-section  dark-background" id="projects">
      {/* title section */}
      <div className='project-section__title' data-aos="fade-right">
        <p>{"WHAT I'VE DONE SO FAR"}</p>
        <h1>Portfolio</h1>
      </div>

      {/* project carousel section */}
      <div className="project-section__carousel" data-aos="flip-left">
        {/* <!-- Carousel wrapper --> */}
        <div id="project-carousel" className="carousel slide carousel-fade" >
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
            <div className="carousel-item active" >
              <Image
                className='project-carousel-img w-80'
                src="/projects/mojo/mojo.png"
                alt="mojo project"
                width={400}
                height={400} />
              <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#project1Details">{"Click for Mojo's full details"}</button>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >
              <Image
                className='project-carousel-img'
                src="/projects/wikimap/wikimap.png"
                alt="Wikimap project"
                width={400}
                height={400} />
              <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#project2Details">{"Click for Wikimap's full details"}</button>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <Image
                className='project-carousel-img'
                src="/projects/jungle/jungle.png"
                alt="Jungle project"
                width={400}
                height={400} />
              <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#projectJungleDetails">{"Click for Jungle's full details"}</button>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <Image
                className='project-carousel-img'
                src="/projects/scheduler/scheduler.png"
                alt="Scheduler project"
                width={400}
                height={400} />
              <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#project3Details">{"Click for Scheduler's full details"}</button>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >
              <Image
                className='project-carousel-img'
                src="/projects/tweeter/tweeter.png"
                alt="Tweeter project"
                width={400}
                height={400} />
              <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#project4Details">{"Click for Tweeter's full details"}</button>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >
              <Image
                className='project-carousel-img'
                src="/projects/moshify/moshify.png"
                alt="Moshify project"
                width={400}
                height={400} />
              <button className='carousel-item__button' data-mdb-toggle="modal" data-mdb-target="#project5Details">{"Click for Moshify's full details"}</button>
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




      {/* <!-- MoJo Modal --> */}
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
                    <span>View Source code and Screenshots</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- WikiMap Modal --> */}
      <div className="modal fade" id="project2Details" tabindex="-1" aria-labelledby="project2DetailsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="project2DetailsLabel">Project Details</h2>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='modal-body__desc'>A responsive web app that allows users to collaboratively create maps which list multiple points.</p>
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
                      src="/colored-logo/jquery.png"
                      alt="jQuery Logo"
                      width={50}
                      height={30} />
                    <span className='language-desc'>jQuery</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/html5.png"
                      alt="html5 Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>HTML5</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/css3.png"
                      alt="CSS3 Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>CSS3</span>
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
                      src="/colored-logo/leaflet.png"
                      alt="React Full Calendar Logo"
                      width={80}
                      height={30} />
                    <span className='language-desc'>leaflet</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/geoapify.png"
                      alt="Draft.js Logo"
                      width={70}
                      height={30} />
                    <span className='language-desc'>GeoApify</span>
                  </div>

                </div>
              </div>
              <div className='modal-body__source-code'>
                <Link href="https://github.com/MoMoZin/wikimap" legacyBehavior>
                  <a target="_blank" className='modal-body__source-code___git'>
                    <i className="fa-brands fa-github fa-lg"></i>
                    <span>View Source code and Screenshots</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Jungle Modal --> */}
      <div className="modal fade" id="projectJungleDetails" tabindex="-1" aria-labelledby="projectJungleDetailsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="projectJungleDetailsLabel">Project Details</h2>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='modal-body__desc'>A web app that allows users to buy plants online and checkout using Stripe. Admin can view dashboard and add/remove products.</p>
              <div className='modal-body__tech-stack'>
                <p>Tech Stack: </p>
                <div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/rails.png"
                      alt="Ruby on rails Logo"
                      width={50}
                      height={30} />
                    <span className='language-desc'>Ruby On Rails</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/postgres.png"
                      alt="Postgres Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>Postgres</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/bootstrap.svg"
                      alt="Bootstrap Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>Bootstrap</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/stripe.png"
                      alt="Stripe Logo"
                      width={50}
                      height={30} />
                    <span className='language-desc'>Stripe</span>
                  </div>
                </div>
              </div>
              <div className='modal-body__api-lib'>
                <p>Testing: </p>
                <div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/rspec.png"
                      alt="Rspec Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>Rspec</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/cypress.svg"
                      alt="cypress Logo"
                      width={80}
                      height={30} />
                    <span className='language-desc'>Cypress</span>
                  </div>
                </div>
              </div>
              <div className='modal-body__source-code'>
                <Link href="https://github.com/MoMoZin/jungle-rails" legacyBehavior>
                  <a target="_blank" className='modal-body__source-code___git'>
                    <i className="fa-brands fa-github fa-lg"></i>
                    <span>View Source code and Screenshots</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Scheduler Modal --> */}
      <div className="modal fade" id="project3Details" tabindex="-1" aria-labelledby="project3DetailsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="project3DetailsLabel">Project Details</h2>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='modal-body__desc'>A web app that allows users to schedule interviews with interviewers.</p>
              <div className='modal-body__tech-stack'>
                <p>Tech Stack: </p>
                <div>
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
                      src="/colored-logo/axios.png"
                      alt="Axios Logo"
                      width={120}
                      height={30} />
                    <span className='language-desc'>Axios</span>
                  </div>
                </div>
              </div>
              <div className='modal-body__api-lib'>
                <p>Testing: </p>
                <div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/cypress.svg"
                      alt="cypress Logo"
                      width={80}
                      height={30} />
                    <span className='language-desc'>Cypress</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/jest.svg"
                      alt="jest Logo"
                      width={70}
                      height={30} />
                    <span className='language-desc'>Jest</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/storybook.svg"
                      alt="storybook Logo"
                      width={70}
                      height={30} />
                    <span className='language-desc'>Storybook</span>
                  </div>

                </div>
              </div>
              <div className='modal-body__source-code'>
                <Link href="https://github.com/MoMoZin/scheduler" legacyBehavior>
                  <a target="_blank" className='modal-body__source-code___git'>
                    <i className="fa-brands fa-github fa-lg"></i>
                    <span>View Source code and Screenshots</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Tweeter Modal --> */}
      <div className="modal fade" id="project4Details" tabindex="-1" aria-labelledby="project4DetailsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="project4DetailsLabel">Project Details</h2>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='modal-body__desc'> Tweeter is a simple, single-page responsive web app and clone of Twitter</p>
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
                      src="/colored-logo/jquery.png"
                      alt="jQuery Logo"
                      width={50}
                      height={30} />
                    <span className='language-desc'>jQuery</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/html5.png"
                      alt="html5 Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>HTML5</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/css3.png"
                      alt="CSS3 Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>CSS3</span>
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

              <div className='modal-body__source-code'>
                <Link href="https://github.com/MoMoZin/tweeter-mo" legacyBehavior>
                  <a target="_blank" className='modal-body__source-code___git'>
                    <i className="fa-brands fa-github fa-lg"></i>
                    <span>View Source code and Screenshots</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Moshify Modal --> */}
      <div className="modal fade" id="project5Details" tabindex="-1" aria-labelledby="project5DetailsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="project5DetailsLabel">Project Details</h2>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='modal-body__desc'>A responsive website for ecommence business with advanced CSS styling</p>
              <div className='modal-body__tech-stack'>
                <p>Tech Stack: </p>
                <div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/js.svg"
                      alt="Javascript Logo"
                      width={50}
                      height={30} />
                    <span className='language-desc'>Javascript</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/html5.png"
                      alt="html5 Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>HTML5</span>
                  </div>
                  <div className='skill-section__languages-group'>
                    <Image
                      src="/colored-logo/css3.png"
                      alt="CSS3 Logo"
                      width={30}
                      height={30} />
                    <span className='language-desc'>CSS3</span>
                  </div>
                </div>
              </div>

              <div className='modal-body__source-code'>
                <Link href="https://github.com/MoMoZin/moshify" legacyBehavior>
                  <a target="_blank" className='modal-body__source-code___git'>
                    <i className="fa-brands fa-github fa-lg"></i>
                    <span>View Source code and Screenshots</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section >
  );

};

export default Project;

