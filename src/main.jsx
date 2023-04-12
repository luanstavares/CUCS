import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Error from "./pages/Error/Error";
import Society from "./pages/Society/Society";
import Root from "./routes/root";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const theme = createTheme({
  palette: {
    primary: { main: "#0098FF" },
    secondary: { main: "#DA2C38" },

    text: { primary: "#FDFFFC" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#0098FF",
        },
        root: {
          color: "#FDFFFC",
        },
      },
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      ErrorBoundary={Error}>
      <Route
        index
        path="/"
        element={<Home />}></Route>
      <Route
        path="/society"
        element={<Society />}></Route>
      <Route
        path="/contact"
        element={<Contact />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
