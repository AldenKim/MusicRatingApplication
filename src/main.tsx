import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";
import { UserInfoProvider } from "./components/UserInfo/UserInfoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <UserInfoProvider>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </UserInfoProvider>
);
