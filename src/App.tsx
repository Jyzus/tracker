import { Provider } from "jotai";
import { HydrateAtoms, queryClient } from "./core/libs/tanstack/tanstack";
import { Router } from "./shared/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { config } from "./core/config/config";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider>
        <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
          <HydrateAtoms>
            <Toaster />
            <Router />
          </HydrateAtoms>
        </GoogleOAuthProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
