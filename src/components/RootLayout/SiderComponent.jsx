import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <UploadOutlined />),
  getItem("Option 2", "2", <VideoCameraOutlined />),
  getItem("User", "sub1", <LaptopOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <UserOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <NotificationOutlined />),
];

function SiderComponent({ collapsed, setCollapsed }) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "var(--theme-bg)",
        borderColor: "var(--theme-bg)",
      }}
      breakpoint="md"
      onCollapse={(collapsed, type) => {
        setCollapsed(collapsed);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        style={{
          backgroundColor: "var(--theme-bg)",
        }}
      />
    </Sider>
  );
}

export default SiderComponent;
