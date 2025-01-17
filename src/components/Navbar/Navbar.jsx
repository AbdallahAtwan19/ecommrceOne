import { NavLink, Link } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/logo_1.png";
import "./Navbar.css";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

export default function Navbar() {
  let navigate = useNavigate();
  let { isLogin, setLogin } = useContext(userContext);
  const { cartItemsCount } = useContext(CartContext);

  function logOut() {
    localStorage.removeItem("userToken");
    setLogin(null);
    navigate("/register");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img src={Logo} alt="Logo" className="logo" />
          <span className="fw-bold px-2 mt-1 text-white">E-Commerce</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isLogin ? (
              <>
                <li className="nav-item mx-2">
                  <NavLink to="home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="products" className="nav-link">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item ms-2 position-relative me-5 mt-1">
                  <NavLink to="carts" className="nav-link">
                    <i className="fas fa-shopping-cart text-white"></i>
                    <span className="cart-badge bg-danger position-absolute badge rounded-pill">
                      {cartItemsCount || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            ) : null}
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {!isLogin ? (
              <>
                <li className="nav-item m-1">
                  <Link
                    to="register"
                    className="btn px-3 py-2 rounded-3"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item m-1">
                  <Link
                    to="login"
                    className="btn px-3 py-2 rounded-3"
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  onClick={logOut}
                  role="button"
                  className="btn px-3 py-2 rounded-3"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
