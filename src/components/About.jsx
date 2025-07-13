import { Link } from "react-router-dom";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our food ordering app! We are dedicated to bringing you the
        best dining experience right at your fingertips. Our mission is to
        connect you with a wide variety of restaurants and cuisines, making it
        easy and convenient to enjoy delicious meals from the comfort of your
        home.
      </p>
      <p>
        Whether you're craving pizza, sushi, or a gourmet burger, we've got you
        covered. Our user-friendly interface allows you to browse menus, place
        orders, and track deliveries in real-time.
      </p>
      <p>
        Thank you for choosing us for your food delivery needs. We look forward
        to serving you!
      </p>
      <div className="home-back-about">
        <Link to="/">
          <button> Back Home </button>
        </Link>
      </div>
    </div>
  );
};
export default About;
