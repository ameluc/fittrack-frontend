import { createBrowserRouter } from "react-router";

import App from "./src/App";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true,  Component: Home },
            { path: "login", Component: Login }
        ]
    }
]);

export default Router;
