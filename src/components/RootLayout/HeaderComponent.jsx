import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function HeaderComponent({ collapsed, setCollapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{
          flex: 1,
          minWidth: 0,
          backgroundColor: "var(--theme-bg)",
        }}
      />
    </Header>
  );
}

export default HeaderComponent;
