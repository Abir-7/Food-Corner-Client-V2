import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { router } from "./Routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./Redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </div>
    </Provider>
  </StrictMode>
);
