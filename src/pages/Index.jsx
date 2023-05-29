import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

import "../style.scss";
import { api } from "../services/api.js";

function Index() {
  const [posts, setPosts] = useState([]);

  const category = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="container">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="links" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link className="button" to={`/post/${post.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
