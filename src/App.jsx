import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

