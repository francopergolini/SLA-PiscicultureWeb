/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  
  {
    path: "/dashboard",
    name: "Est. Piscicultura",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
   
    {
    path: "/notifications",
    name: "Notificationes",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
