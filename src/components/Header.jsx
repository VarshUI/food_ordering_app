import { useState }from "react"
import { Link } from "react-router-dom";
import "../css/header.css";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName]=useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className= "logo-container">
        <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD62ZY3XDU6W80Fkim5czMlCIi3RFNvR6PnIMhElGg9fEDWDrv7-PxyG0RGFK8nKZHT4&usqp=CAU"
      ></img>
      <div className="logo-info">This is the logo information</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ?  "✅": "🔴"}</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-link"> About us</li>
          </Link>
          <Link to="/contact">
            <li className="nav-link">Contact us</li>
          </Link>

          <li>
            <button className="cart" onClick={() => alert("Cart clicked!")}>
              <img
                className="cart-icon"
                src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                alt="Cart Icon"
              />
            </button>
          </li>
          <li> <button className="login-status" onClick={()=>btnName === "Login" ? setbtnName("Logout"):setbtnName("Login")}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
