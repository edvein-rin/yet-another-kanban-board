import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";

import { HomePage } from "components/pages/Home";
import { queryClient } from "utils/queryClient";

export const App = () => (
  <>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  </>
);
