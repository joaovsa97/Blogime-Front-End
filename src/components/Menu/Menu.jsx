import { useState, useEffect } from "react";

import { api } from "../../services/api";

import "./style.scss";

const Menu = (props) => {
  const { category } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts?cat=${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="container">
      <h2>See also</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h3>{post.title}</h3>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
