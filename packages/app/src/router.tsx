import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/Home";
import { EditorPage } from "./pages/Editor";
import { NotFoundPage } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "editor",
        element: <EditorPage />,
      },
      {
        path: "editor/:projectId",
        element: <EditorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
