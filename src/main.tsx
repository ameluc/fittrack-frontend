import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import Router from "../routes.ts";

const element = document.getElementById("root");
if (element) createRoot(element).render(<StrictMode><RouterProvider router={ Router } /></StrictMode>);
