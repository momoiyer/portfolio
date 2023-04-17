import Image from 'next/image';

const Blog = () => {
  return (
    <section className="blog-section  dark-background" data-aos="fade-right">
      <h1>Read my blog posts</h1>

      <div className='blog-section__blogs'>

        <div className='blog-section__blog-item'>
          <Image
            src="/blog/ORM.webp"
            alt="Picture of me"
            width={300}
            height={200} />
          <div>
            <p>Popular ORMs (Object-relational Mapping) in JavaScript</p>
            <a>READ MORE</a>
          </div>
        </div>
        <div className='blog-section__blog-item'>
          <Image
            src="/blog/ORM.webp"
            alt="Picture of me"
            width={300}
            height={200} />
          <div>
            <p>Popular ORMs (Object-relational Mapping) in JavaScript</p>
            <a>READ MORE</a>
          </div>
        </div>
        <div className='blog-section__blog-item'>
          <Image
            src="/blog/ORM.webp"
            alt="Picture of me"
            width={300}
            height={200} />
          <div>
            <p>Popular ORMs (Object-relational Mapping) in JavaScript</p>
            <a>READ MORE</a>
          </div>
        </div>
        <div className='blog-section__blog-item'>
          <Image
            src="/blog/ORM.webp"
            alt="Picture of me"
            width={300}
            height={200} />
          <div>
            <p>Popular ORMs (Object-relational Mapping) in JavaScript</p>
            <a>READ MORE</a>
          </div>
        </div>

        {/* <img
          src="/blog/blog-1.png"
          alt="first blog post" />
        <img
          src="/blog/blog-1.png"
          alt="first blog post" />
        <img
          src="/blog/blog-1.png"
          alt="first blog post" /> */}
      </div>
    </section>
  );
};

export default Blog;