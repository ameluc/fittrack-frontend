import { createBrowserRouter } from "react-router";
import App from "./app";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import SingIn from "./pages/sign-in";
import Signup from "./pages/sign-up";


export const RoutesForLanding = createBrowserRouter([{
    path: "/",
    Component: App,
    children: [
        { index: true, Component: Home },
        { path: "singin", Component: SingIn },
        { path: "signup", Component: Signup },
        { path: "dashboard", Component: Dashboard }
    ]
}]);
