import React from 'react';
import logo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const history = useHistory();

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.error("Logged Out");
    history.push("/"); // Redirect to the home page after logging out
  };

  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        {!isLoggedIn && (
          <>
            <Link to="/login">
              <button>Log in</button>
            </Link>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <button onClick={handleLogout}>Log Out</button>
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
