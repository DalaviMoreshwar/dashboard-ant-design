import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
const { Header } = Layout;

function HeaderComponent({ collapsed, setCollapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        // position: "sticky",
        // top: 0,
        // zIndex: 1,
        // width: "100%",
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
    </Header>
  );
}

export default HeaderComponent;
