import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Decks from "./components/decks/Decks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Decks />,
      },
    ],
  },
]);

export default router;
