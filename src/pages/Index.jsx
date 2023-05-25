import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  // const posts = [
  //   {
  //     id: 1,
  //     title: "lorem 1",
  //     img: "https://images.pexels.com/photos/9866764/pexels-photo-9866764.jpeg",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloribus magnam sint in reprehenderit dolorum!",
  //   },
  //   {
  //     id: 2,
  //     title: "lorem 2",
  //     img: "https://images.pexels.com/photos/12815070/pexels-photo-12815070.jpeg",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id mollitia consequatur nihil eos quisquam. Architecto natus numquam aspernatur culpa aliquam quidem asperiores esse ducimus. Nisi suscipit quas veritatis amet error doloribus, quae, numquam ullam distinctio natus veniam sunt explicabo tenetur. Quasi maxime tempore dignissimos, iste minima voluptate mollitia est provident!",
  //   },
  // ];

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
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
