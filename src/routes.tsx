import { createBrowserRouter } from "react-router-dom";
import { PersonalInfo } from "./pages/PersoanlInfo";
import { Salary } from "./pages/Salary";
import { Summary } from "./pages/Summary";
import { WelcomePage } from "./pages/Welcome";
import { Confirmation } from "./pages/Confirmation";

export const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/personal-info", element: <PersonalInfo /> },
  { path: "/summary", element: <Summary /> },
  { path: "/salary", element: <Salary /> },
  { path: "/success", element: <Confirmation /> },
]);
