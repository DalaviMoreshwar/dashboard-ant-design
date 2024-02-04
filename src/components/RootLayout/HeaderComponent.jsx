import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

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

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
