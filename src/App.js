import { theme } from "antd";
import "./App.css";
import RootLayout from "./components/RootLayout";

const { useToken } = theme;

function App() {
  const { token } = useToken();
  return (
    <div style={{ color: token.colorText }}>
      <RootLayout />
    </div>
  );
}

export default App;
