import Image from 'next/image';

const Blog = () => {
  return (
    <section className="blog-section  dark-background" data-aos="fade-right" id='blogs'>
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
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner ">
            <div className="carousel-item carousel-item__blog active" data-mdb-interval="500000">

              <Image
                src="/blog/ORM.webp"
                alt="blog post picture"
                width={500}
                height={300} />

              <div className="carousel-image-description" >
                <div>
                  <h3>Popular ORMs (Object-relational Mapping) in JavaScript</h3>
                  <a className='blog-link' target="_blank" href='https://medium.com/@khinmomozin/popular-orms-object-relational-mapping-in-javascript-1391ed13d326'>READ MORE</a>
                </div>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item carousel-item__blog" >{/* <div className="carousel-caption d-none d-md-block"> */}
              <Image
                src="/blog/blog-api.jpg"
                alt="blog post picture"
                width={500}
                height={300} />

              <div className="carousel-image-description" >
                <div>
                  <h3>Creating a Simple RESTful API with Node.js and Express: A Step-by-Step Guide.</h3>
                  <a className='blog-link' target="_blank" href='https://medium.com/@khinmomozin/creating-a-simple-restful-api-with-node-js-and-express-a-step-by-step-guide-2339c9359556'>READ MORE</a>
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