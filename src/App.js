import { useContext } from "react";
import { ConfigProvider, theme } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import { Home, PageNotFound, Profile, Table } from "./pages";

import ThemeContext from "./context/ThemeContext";
import Container from "./containers/Container";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      element: <Container />,
      errorElement: <PageNotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/table", element: <Table /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === "light" ? defaultAlgorithm : darkAlgorithm,
        token: {
          colorPrimary: theme === "light" ? "#096dd9" : "#d90969",
          colorInfo: theme === "light" ? "#096dd9" : "#d90969",
          colorText: theme === "light" ? "#111" : "#f9f9f9",
          fontFamily: "Inter",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
