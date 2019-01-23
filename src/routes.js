// Import components
import Homepage from "./Homepage";
import { Menu } from "./components/Menu";

export const AllRoutes = [
  {
    path: "/",
    component: Homepage
  },
  {
    path: "/menu-:num",
    component: Menu
  }
];
