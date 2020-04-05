import UserSelector from "../components/UserSelector";
import NotFound from "../components/NotFound";

const routes = [
  { path: "/", component: UserSelector, exact: true },
  { path: "/leaders", component: UserSelector },
  { path: "/new-question", component: UserSelector },
  { path: "/user-selection", component: UserSelector },
  { path: "*", component: NotFound },
];

export default routes;
