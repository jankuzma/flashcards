import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Decks from "./components/decks/Decks.jsx";
import LearningWrapper from "./components/learning/LearningWrapper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Decks />,
      },
      {
        path: "/learning/:deckId",
        element: <LearningWrapper />,
      },
    ],
  },
]);

export default router;
