import { useState } from "react";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
  const [isEditing, setisEditig] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <Login isEditing={isEditing} changeLogin={() => setisEditig(true)} />

        <Register
          isEditing={isEditing}
          changeRegister={() => setisEditig(false)}
        />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
