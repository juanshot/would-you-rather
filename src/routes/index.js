import Dashboard from './../components/Dashboard'
import Leaders from "../components/Leaders";
import NotFound from "../components/NotFound";
import NewQuestion from './../components/NewQuestion'
import UserSelector from "../components/UserSelector";

const routes = [
  { path: "/", component: UserSelector, exact: true },
  { path: "/dashboard", component: Dashboard, exact: true },
  { path: "/leaders", component: Leaders },
  { path: "/new-question", component: NewQuestion },
  { path: "*", component: NotFound },
];

export default routes;
