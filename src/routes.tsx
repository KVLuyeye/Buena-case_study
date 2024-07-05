import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersonalInfo } from "./views/PersoanlInfo";
import { Salary } from "./views/Salary";
import { Summary } from "./views/Summary";

export const router = createBrowserRouter([
  { path: "/", element: <PersonalInfo /> },
  { path: "/summary", element: <Summary /> },
  { path: "/salary", element: <Salary /> },
]);
