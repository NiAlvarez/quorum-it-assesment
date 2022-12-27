import RecentNews from "../pages/RecentNews";
import TopRated from "../pages/TopRated";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RecentNews />,
  },
  {
    path: "/rated",
    element: <TopRated />,
  },
]);