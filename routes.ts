import { createBrowserRouter } from "react-router";

import App from "./src/App";
import Login from "./src/pages/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Login },
        ]
    }
]);

export default Router;
