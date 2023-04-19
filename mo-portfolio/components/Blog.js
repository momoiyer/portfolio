import Image from 'next/image';

const Blog = () => {
  return (
    <section className="blog-section  dark-background" data-aos="fade-right">
      <div className='blog-section__title' data-aos="fade-right">
        <p>WHAT I WROTE</p>
        <h1>Blog</h1>
      </div>

      <div className="project-section__carousel" data-aos="flip-left">
        {/* <!-- Carousel wrapper --> */}
        <div id="blog-carousel" className="carousel slide carousel-fade" data-mdb-ride="carousel">
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#blog-carousel"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#blog-carousel"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#blog-carousel"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner ">
            <div className="carousel-item carousel-item__blog active" data-mdb-interval="500000">

              <Image
                src="/blog/ORM.webp"
                alt="blog post picture"
                width={500}
                height={200} />

              <div className="carousel-image-description" >
                <div>
                  <h2>1 Popular ORMs (Object-relational Mapping) in JavaScript</h2>
                  <a>READ MORE</a>
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item carousel-item__blog" >{/* <div className="carousel-caption d-none d-md-block"> */}
              <Image
                src="/blog/ORM.webp"
                alt="blog post picture"
                width={500}
                height={200} />

              <div className="carousel-image-description" >
                <div>
                  <h2>2 Popular ORMs (Object-relational Mapping) in JavaScript</h2>
                  <a>READ MORE</a>
                </div>
              </div>
            </div>


            {/* <!-- Single item --> */}
            <div className="carousel-item carousel-item__blog">
              <Image
                src="/blog/ORM.webp"
                alt="blog post picture"
                width={500}
                height={200} />

              <div className="carousel-image-description" >
                <div>
                  <h2>3 Popular ORMs (Object-relational Mapping) in JavaScript</h2>
                  <a>READ MORE</a>
                </div>
              </div>
            </div>

          </div>
          {/* <!-- Inner -->

        <!-- Controls --> */}
          <button className="carousel-control-prev" type="button" data-mdb-target="#blog-carousel" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#blog-carousel" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
      </div>


    </section>
  );
};

export default Blog;