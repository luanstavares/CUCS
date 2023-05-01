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
import Root from "./routes/Root";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const theme = createTheme({
  palette: {
    primary: { main: "#0098FF" },
    secondary: { main: "#DA2C38" },
    mode: "dark",
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
      path="/CUCS/"
      element={<Root />}
      ErrorBoundary={Error}>
      <Route
        index
        path="/CUCS/"
        element={<Home />}></Route>
      <Route
        path="/CUCS/society"
        element={<Society />}></Route>
      <Route
        path="/CUCS/contact"
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
