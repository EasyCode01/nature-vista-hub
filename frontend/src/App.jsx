import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Blogs,
  Books,
  Contact,
  Gallery,
  Homepage,
  Promotions,
} from "./pages";
import NotFound from "./components/NotFound";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <MobileMenu />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blogs />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/promotion",
          element: <Promotions />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
