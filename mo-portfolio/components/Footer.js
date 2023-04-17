const Footer = () => {
  return (
    <footer className="footer-section dark-background">
      <div className="footer-section__upper">
        <div>
          <h4>KHIN MO MO ZIN</h4>
          <p>A full stack Web Developer building the Web Applications that leads to the success of the overall product. </p>
        </div>
        <div>
          <h5>SOCIAL</h5>
          <div>
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
        <span>&copy; 2023. Made by </span>
        <a rel="noreferrer" target="_blank" href="https://khinmomozin.com">Khin Mo Mo Zin</a>
      </div>
    </footer>
  );
};

export default Footer;