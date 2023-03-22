import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import App from "./App";
import "./index.css";

import "devextreme/dist/css/dx.light.css";

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (response, variables, context, mutation) => {
      console.log("success", mutation);
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
