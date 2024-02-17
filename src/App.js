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
          colorPrimary: theme === "light" ? "#096dd9" : "#1890ff",
          colorInfo: theme === "light" ? "#096dd9" : "#1890ff",
          colorText: theme === "light" ? "#222" : "#d9d9d9",
          colorBgContainer: theme === "light" ? "#fff" : "#060c1d",
          colorBgLayout: theme === "light" ? "#eee" : "#020817",
          fontFamily: "Inter",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
