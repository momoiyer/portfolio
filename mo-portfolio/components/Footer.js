import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__upper">
        <div>
          <h3>KHIN MO MO ZIN</h3>
          <p className="footer-section__upper___tagline">A full stack Web Developer building the Web Applications that leads to the success of the overall product. </p>
        </div>
        <div>
          <h3>Connect with me</h3>
          <div className="footer-section__upper__social">
            <Link href="https://www.linkedin.com/in/khinmomozin/" legacyBehavior>
              <a target="_blank" className='me-4 text-reset'>
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </Link>

            <Link href="https://github.com/MoMoZin" legacyBehavior>
              <a target="_blank" className='me-4 text-reset'>
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
            </Link>

            <Link href="https://medium.com/@khinmomozin" legacyBehavior>
              <a target="_blank" className='me-4 text-reset'>
                <i className="fa-solid fa-blog fa-lg"></i>
              </a>
            </Link>

            <Link href="mailto:khinmomozin@gmail.com" legacyBehavior>
              <a target="_blank" className='me-4 text-reset'>
                <i className="fa-solid fa-envelope fa-lg"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
      <div class="footer-section__lower">
        <span>&copy; copyright 2023. Made by </span>
        <a rel="noreferrer" target="_blank" href="https://khinmomozin.com">Khin Mo Mo Zin</a>
      </div>
    </footer>
  );
};

export default Footer;