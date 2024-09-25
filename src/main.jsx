import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import "../src/App.css"
// import * as serviceWorkerRegistration from '../src/serviceWorkerRegistration'; // Import the service worker registration


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router/>
  </StrictMode>
);

// Register the service worker
// serviceWorkerRegistration.register();