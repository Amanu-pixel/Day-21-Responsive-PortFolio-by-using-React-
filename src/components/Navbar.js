import "./NavbarStyle.css"; 
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={() => setClick(false)}>Home</Link>
        </li>
        <li>
          <Link to="/project" onClick={() => setClick(false)}>Project</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setClick(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setClick(false)}>Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;