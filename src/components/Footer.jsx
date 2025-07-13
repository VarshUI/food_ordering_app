import "../css/footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p>© 2025 Food Ordering App. All rights reserved.</p>
      <button onClick={scrollToTop}>Go to Top</button>
    </footer>
  );
};

export default Footer;
