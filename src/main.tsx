import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { router } from "./Routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import { persistor, store } from "./Redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <RouterProvider router={router} />
          <Toaster></Toaster>
        </div>
      </PersistGate>
    </Provider>
  </StrictMode>
);
