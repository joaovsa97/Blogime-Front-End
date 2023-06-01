import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import moment from "moment";

import Menu from "../components/Menu/Menu";

import "../style.scss";
import Edit from "../assets/edit-icon.png";
import Delete from "../assets/delete-icon.png";

import { api } from "../services/api";
import { AuthContext } from "../context/authContext.js";

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const formatText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await api.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="single">
        <div className="content">
          <img src={`../upload/${post.img}`} alt="" />
          <div className="user">
            <img src={`../upload/${post.img}`} alt="" />
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post?.date).fromNow()}</p>
            </div>
            {currentUser?.username === post.username && (
              <div className="edit">
                <Link to={`/write?edit=${postId}`} state={post}>
                  <img src={Edit} alt="" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="" />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          {formatText(post.desc)}
        </div>
        <div className="menu">
          <Menu category={post?.category}/>
        </div>
      </div>
    </div>
  );
};

export default Single;
