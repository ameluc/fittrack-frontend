import { createBrowserRouter } from "react-router";
import App from "./src/App";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import SignupPage from "./src/pages/SignupPage";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true,  Component: HomePage },
            { path: "login", Component: LoginPage },
            { path: "Signup", Component: SignupPage }
        ]
    }
]);

export default Router;
