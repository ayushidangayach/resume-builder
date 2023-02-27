import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Experience from "./components/pages/Experience";
import Home from "./components/pages/Home";
import PersonalInfo from "./components/pages/PersonalInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/personal-info",
        element: <PersonalInfo />
      },
      {
        path: "/experience",
        element: <Experience />
      }
    ]
  },
]);

export default routes;
