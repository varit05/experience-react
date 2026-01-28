import { StrictMode } from "react";

import { RouterProvider } from "react-router/dom";

import "./App.css";
import router from "./router";

function App() {
  return (
    <StrictMode>
      <section className="main-page">
        <RouterProvider router={router} />
      </section>
    </StrictMode>
  );
}

export default App;
