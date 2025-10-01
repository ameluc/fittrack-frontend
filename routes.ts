import { createBrowserRouter } from "react-router";
import App from "./src/App";
import Dashboard from "./src/pages/DashBoard";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";


const Router = createBrowserRouter([{
    path: "/",
    Component: App,
    children: [
        { index: true,  Component: Home },
        { path: "login", Component: Login },
        { path: "signup", Component: Signup },
        { path: "dashboard", Component: Dashboard }
    ]
}]);
export default Router;
