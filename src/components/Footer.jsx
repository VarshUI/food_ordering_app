export const About = () => {
  return (
    <div className="About">
      <p>About Us</p>
      <p>
        We are a food ordering app dedicated to bringing you the best dining
        experience.
      </p>
    </div>
  );
};
export const Contact = () => {
  return (
    <div className="contact">
      <p>© 2025 Food Ordering App. All rights reserved.</p>
      <ul className="social-media">
        <li>
          <a href="https://www.facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com">Instagram</a>
        </li>
      </ul>
    </div>
  );
};
export const GoToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="go-to-top">
      <button onClick={GoToTop}>Go to Top</button>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <About />
      <Contact />
      <GoToTop />
    </div>
  );
};
export default Footer;
