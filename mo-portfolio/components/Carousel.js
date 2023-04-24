const Carousel = (props) => {
  const { id, className, totalSlide } = props;

  const generateButton = () => {
    let i = -1;
    const buttonList = [];
    for (let j = 1; i < totalSlide - 1; j++) {
      i++;
      if (i == 0) {
        buttonList.push(
          <button
            type="button"
            data-mdb-target={`#${id}`}
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
        );
      } else {
        buttonList.push(
          <button
            type="button"
            data-mdb-target={`#${id}`}
            data-mdb-slide-to={i}
            aria-label={`Slide ${i + 1}`}
          ></button>
        );
      }
    }
    return buttonList;
  };
  return (
    <>
      {/* <!-- Carousel wrapper --> */}
      <div id={id} className="carousel slide carousel-fade" data-mdb-ride="carousel">
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">

          {generateButton()}
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner ">
          {/* <!-- Single item --> */}
          <div className="carousel-item active" data-mdb-interval="500000">
            <img src="/projects/mojo/mojo-v3.png" alt="Sunset Over the City" />
            <div className="carousel-image-description" >
              <p>Image Description</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}
            <img src="/projects/mojo/home.jpg" className="d-block w-100" alt="Canyon at Nigh" />

            <div className="carousel-image-description" >
              <p>Image Description</p>
            </div>
          </div>


          {/* <!-- Single item --> */}
          <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}
            <img src="/projects/mojo/calendar.jpg" className="d-block w-100" alt="Canyon at Nigh" />

            <div className="carousel-image-description" >
              <p>Image Description</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item" >{/* <div className="carousel-caption d-none d-md-block"> */}
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />

            <div className="carousel-image-description" >
              <p>Image Description</p>
            </div>
          </div>



        </div>
        {/* <!-- Inner -->

        <!-- Controls --> */}
        <button className="carousel-control-prev" type="button" data-mdb-target={`#${id}`} data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target={`#${id}`} data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Carousel wrapper --> */}
    </>

  );
};

export default Carousel;