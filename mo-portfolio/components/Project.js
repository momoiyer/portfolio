import Image from 'next/image';

const Project = () => {
  return (
    <section className="project-section  dark-background"
    // data-aos="zoom-out"
    >
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
                <button className='carousel-item__button'>Click for full portfolio</button>
                {/* <p>A mood management web app for daily journaling, habit tracking, and music suggestion to match the current mood.</p>
                <p>Tech Stack: </p>
                <div>
                  <Image
                    src="/skill-logo/node.svg"
                    alt="Node.js Logo"
                    width={50}
                    height={30} />
                  <Image
                    src="/skill-logo/express.svg"
                    alt="Express Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/skill-logo/react.svg"
                    alt="React Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/skill-logo/sass.svg"
                    alt="SASS Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/skill-logo/postgres.svg"
                    alt="Postgres Logo"
                    width={30}
                    height={30} />
                </div>
                <p>API & Libraries: </p>
                <div>
                  <Image
                    src="/colored-logo/fullcalendar.png"
                    alt="React Full Calendar Logo"
                    width={40}
                    height={40} />
                  <Image
                    src="/colored-logo/draftjs.svg"
                    alt="Draft.js Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/colored-logo/spotify.png"
                    alt="Draft.js Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/colored-logo/weather.png"
                    alt="Draft.js Logo"
                    width={60}
                    height={30} />
                </div>*/}
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

    </section >
  );

  //   #000000
  // #323012
  // #69663a
  // #f9f3e5
  // #ffffff

};

export default Project;

