import { Link } from "react-router-dom";
import { FaKeybase, FaBars } from "react-icons/fa"; //FaReact
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import { useState } from "react";
import "./style.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => (prevClick = !click)); // setClick(!Click)
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="navbar-container-logo">
            <FaKeybase size={30} />
          </Link>

          <ul
            className={
              click
                ? "navbar-container-menu active"
                : "navbar-container-menu deactive"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar-container-menu-item">
                <Link className="navbar-container-menu-item-links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* hamburger-like-menu */}
          <div className="navbar-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
