//react imports
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet,
} from "react-router-dom";

//import pages
import Index from "./pages/Index.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Single from "./pages/Single.jsx";
import Write from "./pages/Write.jsx";

//component imports
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/single",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
