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

import { createNotification } from "./js/helpers";

import "devextreme/dist/css/dx.light.css";
import Mutations from "./models/enums/mutations";

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      createNotification("Something went wrong... ", "error");
    },
    onSuccess: (response, variables, context, mutation) => {
      const mutationKey = mutation.options.mutationKey![0];

      switch (mutationKey) {
        case Mutations.CREATE_NEW_USER: {
          createNotification("Your user was successfully created!", "success");
          break;
        }
      }
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
