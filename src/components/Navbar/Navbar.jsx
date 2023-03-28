import React from 'react';
import { Link } from 'react-router-dom';

import "../../components/Navbar/style.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">logo</div>
        <div className="links">
          <Link to="/?cat=Animes">Anime</Link>
          <Link to="/?cat=Mangas">Manga</Link>
          <Link to="/?cat=Music">Music</Link>
        </div>
    </div>
  )
}

export default Navbar