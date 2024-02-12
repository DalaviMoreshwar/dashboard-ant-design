import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  BellOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme as T } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const { Header } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}

const items1 = [
  getItem("Notifications", "", <BellOutlined />),
  getItem(
    "User",
    "/profile",
    <Avatar
      style={{ justifyContent: "center", backgroundColor: "#ccc" }}
      icon={<UserOutlined />}
    />
  ),
];

function HeaderComponent({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    token: { colorBgContainer },
  } = T.useToken();

  const handleNavClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Header
      style={{
        display: "flex",
        background: colorBgContainer,
        padding: 0,
      }}
    >
      <Button
        icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
        onClick={toggleTheme}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Menu
        onClick={handleNavClick}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "auto",
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}

export default HeaderComponent;
