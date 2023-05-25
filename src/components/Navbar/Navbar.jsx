import { useContext } from "react";
import { Link } from "react-router-dom";

import "../../components/Navbar/style.scss";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <div className="links">
        <Link to="/?cat=Animes">Anime</Link>
        <Link to="/?cat=Mangas">Manga</Link>
        <Link to="/?cat=Music">Music</Link>
      </div>
      <div className="actions">
        {!currentUser ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <h5 className="username">
              Hello,<span> {currentUser?.username}</span>
            </h5>
            <a className="link" onClick={() => logout()}>logout</a>
            <Link to="/write">Write</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
