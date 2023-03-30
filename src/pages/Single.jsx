import { Link } from "react-router-dom";

import Menu from "../components/Menu/Menu"

import "../style.scss";
import Edit from "../assets/edit-icon.png";
import Delete from "../assets/delete-icon.png";

const Single = () => {
  return (
    <div className="container">
      <div className="single">
        <div className="content">
          <img
            src="https://images.pexels.com/photos/12815070/pexels-photo-12815070.jpeg"
            alt=""
          />
          <div className="user">
            <img
              src="https://images.pexels.com/photos/9866764/pexels-photo-9866764.jpeg"
              alt=""
            />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                  <img src={Edit} alt="" />
                </Link>
                <img src={Delete} alt="" />
              </div>
          </div>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorum eveniet ab et aperiam ducimus tempore distinctio sequi at saepe!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde atque aperiam fugiat sint voluptates cupiditate, sit eos eius voluptatem impedit accusamus! Aliquam quae laudantium molestias repudiandae rerum in, optio dolore expedita rem quidem quod commodi amet eveniet quo dolorum corporis odio ducimus veritatis dolorem velit cumque temporibus autem.
            <br /> Dolore enim beatae cum laboriosam aliquam autem voluptates et, deleniti vero, dolor repellendus amet repudiandae quae officia? Deserunt, molestiae harum! Molestiae atque nulla autem molestias in fuga ducimus veniam, dolorem voluptate enim omnis corporis aliquid culpa blanditiis nobis rerum! Ratione eaque sequi impedit cum qui odit, aliquid magnam temporibus quibusdam, inventore saepe nobis aliquam amet vero ea. Esse officiis non inventore? Dolore asperiores recusandae delectus repellat quo quos nihil soluta! Sint eligendi veniam incidunt ullam iste ea, consequatur facilis ratione et libero assumenda hic maiores debitis neque aperiam odit iure laudantium harum!<br/> Illo et, unde delectus fugit laborum saepe modi quo, consequuntur velit consectetur dolorum ex sunt tempora molestias nemo exercitationem quas animi. Molestias dolore ex ab deleniti omnis repudiandae molestiae adipisci odit sapiente similique qui perspiciatis vero, exercitationem necessitatibus ullam et facilis. Similique, perferendis minima unde repellendus nostrum animi autem nobis aperiam doloremque sapiente iste! Autem exercitationem molestiae nulla mollitia illum. Modi consequatur corporis ipsa, eum saepe beatae obcaecati reiciendis ad veritatis velit aut libero impedit! Saepe nesciunt ab, vel a, numquam quia soluta aperiam voluptas neque asperiores est consectetur tenetur beatae ducimus fugiat architecto ipsum commodi rerum repudiandae eaque nemo quibusdam dignissimos? Doloremque voluptatem sed fuga fugiat voluptate, corporis ab!</p>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Single;
