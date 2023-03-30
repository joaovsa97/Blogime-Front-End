import React from "react";

import "./style.scss";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "lorem 1",
      img: "https://images.pexels.com/photos/9866764/pexels-photo-9866764.jpeg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloribus magnam sint in reprehenderit dolorum!",
    },
    {
      id: 2,
      title: "lorem 2",
      img: "https://images.pexels.com/photos/12815070/pexels-photo-12815070.jpeg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id mollitia consequatur nihil eos quisquam. Architecto natus numquam aspernatur culpa aliquam quidem asperiores esse ducimus. Nisi suscipit quas veritatis amet error doloribus, quae, numquam ullam distinctio natus veniam sunt explicabo tenetur. Quasi maxime tempore dignissimos, iste minima voluptate mollitia est provident!",
    },
  ];

  return (
    <div className="container">
      <h2>See also</h2>
      {posts.map(post => (
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
