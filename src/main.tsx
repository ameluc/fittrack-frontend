import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { RoutesForLanding } from "./router";
import "./index.css";


const element = document.getElementById("root");

if (element) createRoot(element).render(<StrictMode><RouterProvider router={ RoutesForLanding } /></StrictMode>);
