import Dashboard from "./../components/Dashboard";
import Leaders from "../components/Leaders";
import NotFound from "../components/NotFound";
import NewQuestion from "./../components/NewQuestion";
import UserSelector from "../components/UserSelector";
import QuestionDetail from "../components/QuestionDetail";

export default [
  {
    path: "/",
    component: UserSelector,
    exact: true,
    notGuarded: true,
    menuItem: false,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
    menuItem: true,
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: Leaders,
    menuItem: true,
  },
  {
    path: "/add",
    name: "New Question",
    component: NewQuestion,
    menuItem: true,
  },
  {
    path: "/questions/:question_id",
    component: QuestionDetail,
    menuItem: false,
  },
  { path: "*", component: NotFound, menuItem: false },
];
