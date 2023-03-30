import React from "react";
import { Link } from "react-router-dom";

import "../../components/Navbar/style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">logo</div>
      <div className="links">
        <Link to="/?cat=Animes">Anime</Link>
        <Link to="/?cat=Mangas">Manga</Link>
        <Link to="/?cat=Music">Music</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="actions">
      <h5 className="username">Hello,<span> John Snow</span></h5>
        <Link to="/write">Write</Link>
      </div>
    </div>
  );
};

export default Navbar;
