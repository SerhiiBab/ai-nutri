import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/ai-nutri.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header--logomenu">
      <img className="logo" src={logo} alt="AI Nutri Logo" />

      <nav className={`nav ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>Start</NavLink>
        <NavLink to="/heute" onClick={() => setOpen(false)}>Analyse</NavLink>
        <NavLink to="/bericht" onClick={() => setOpen(false)}>Bericht</NavLink>
      </nav>

      <button className="burger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
     </div>
    </header>
  );
};

export default Header;


