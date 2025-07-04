import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import About from "./About.jsx";
import {
  createBrowserRouter,
  BrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Search from "./components/Search.jsx";
import "./main.css";
import Footer from "./components/footer.jsx";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    ErrorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
