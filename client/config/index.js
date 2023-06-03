import { Home, About, Contact } from "../components/pages";

const routes = [
   {
      path: "/contact",
      component: Contact
   },
   {
      path: "/about",
      component: About
   },
   {
      path: "/home",
      component: Home
   },
   {
      path: "/",
      component: Home
   },
];

export default routes;