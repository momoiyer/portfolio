import Image from 'next/image';

const Project = () => {
  return (
    <section className="project-section  light-background">
      <h1>Review my projects</h1>

      <div className="project-section__carousel">
        {/* <!-- Carousel wrapper --> */}
        <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner ">
            {/* <!-- Single item --> */}
            <div className="carousel-item active" data-mdb-interval="500000">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100" alt="Sunset Over the City" />
              {/* <div className="carousel-caption d-none d-md-block"> */}

              <div className="carousel-image-description" >
                <h3>MoJo</h3>
                <p>A mood management web app for daily journaling, habit tracking, and music suggestion to match the current mood.</p>
                <p>Tech Stack: </p>
                <div>
                  <Image
                    src="/colored-logo/nodejs.png"
                    alt="Node.js Logo"
                    width={50}
                    height={30} />
                  <Image
                    src="/skill-logo/express.svg"
                    alt="Express Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/colored-logo/react.png"
                    alt="React Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/colored-logo/sass.svg"
                    alt="SASS Logo"
                    width={30}
                    height={30} />
                  <Image
                    src="/colored-logo/postgres.png"
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
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}
              <div className="carousel-image-description" >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea" />
              {/* <div className="carousel-caption d-none d-md-block"> */}

              <div className="carousel-image-description" >
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}
              <div className="carousel-image-description" >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />
            </div>
          </div>
          {/* <!-- Inner -->

        <!-- Controls --> */}
          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
      </div>


    </section>
  );
};

export default Project;