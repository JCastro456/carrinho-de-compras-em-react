import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Electronics Shop
          </Link>
        </h1>
      </div>

      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart"  className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {/* <i className="fas fa-shopping-cart"/> */}
              <span className="cart-length">
                {cartItems.length === 0 ? "": cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};


export default Header
