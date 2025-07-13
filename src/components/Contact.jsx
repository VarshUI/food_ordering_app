import { Link } from "react-router-dom";
import '../css/contactUs.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or feedback, feel free to reach out to us at:
      </p>
      <ul>
        <li>Email: abc@abc.com</li>
        <li>Phone: +1234567890</li>
        <li>Address: 123 Food Street, Food City, FC 12345</li>
      </ul>
      <div className="home-back-contact">
        <Link to="/">
          <button> Back Home </button>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
