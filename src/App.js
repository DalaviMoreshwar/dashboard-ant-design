import { theme } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import { Home, PageNotFound, Profile, Table } from "./pages";

import RootLayout from "./components/RootLayout";

const { useToken } = theme;

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/table", element: <Table /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);
  const { token } = useToken();
  return (
    <div style={{ color: token.colorText }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
