import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true,        Component: Home },
      { path: "work",       Component: Work },
      { path: "services",   Component: Services },
      { path: "about",      Component: About },
      { path: "contact",    Component: Contact },
    ],
  },
]);
