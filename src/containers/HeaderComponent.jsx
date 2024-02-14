import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme as T } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { getMenuItem } from "../utils/customizeMenu";
import ProfileThumbnail from "../components/ProfileThumbnail";

const { Header } = Layout;
const headerButtonStyle = {
  border: "none",
  fontSize: "16px",
  width: 64,
  height: 64,
};

function HeaderComponent({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    token: { colorBgContainer },
  } = T.useToken();

  const handleNavClick = ({ key }) => {
    navigate(key);
  };

  const items1 = [
    getMenuItem("Notifications", "/notifications", <BellOutlined />),
  ];

  return (
    <Header
      style={{
        display: "flex",
        background: colorBgContainer,
        padding: 0,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={headerButtonStyle}
      />

      <Menu
        onClick={handleNavClick}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
        style={{
          borderBottom: "1px solid transparent",
          display: "flex",
          justifyContent: "end",
          margin: "auto",
          flex: 1,
          minWidth: 0,
        }}
      />
      <Button
        icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
        onClick={toggleTheme}
        style={headerButtonStyle}
      />
      <Link to="/profile">
        <Button
          icon={<ProfileThumbnail size="default" />}
          style={headerButtonStyle}
        />
      </Link>
    </Header>
  );
}

export default HeaderComponent;
