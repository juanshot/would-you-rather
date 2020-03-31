import UserSelector from "../components/UserSelector";
import NotFound from "../components/NotFound";

const routes = [
  { path: "/", component: UserSelector, exact: true },
  { path: "*", component: NotFound }
];

export default routes;
