import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const items1 = ["Profile"].map((key) => ({
  key: "/profile",
  label: `${key}`,
}));

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
        alignItems: "center",
        padding: 0,
        background: colorBgContainer,
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
        // defaultSelectedKeys={["1"]}
        items={items1}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}

export default HeaderComponent;
