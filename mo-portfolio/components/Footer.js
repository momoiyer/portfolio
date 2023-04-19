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
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fa-solid fa-blog"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fa-solid fa-envelope"></i>
            </a>
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