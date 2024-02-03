import { HomeOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Avatar, Layout, Menu, Space, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}
const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Table", "/table", <VideoCameraOutlined />),
  // getItem("Navigation One", "sub1", <MailOutlined />, [
  //   getItem(
  //     "Item 1",
  //     "g1",
  //     null,
  //     [getItem("Option 1", "#"), getItem("Option 2", "#")],
  //     "group"
  //   ),
  //   getItem(
  //     "Item 2",
  //     "g2",
  //     null,
  //     [getItem("Option 3", "#"), getItem("Option 4", "#")],
  //     "group"
  //   ),
  // ]),
  // getItem("User", "/sub1", <LaptopOutlined />, [
  //   getItem("Tom", "/3"),
  //   getItem("Bill", "/4"),
  //   getItem("Alex", "/5"),
  // ]),
  // getItem("Team", "/sub2", <UserOutlined />, [
  //   getItem("Team 1", "/6"),
  //   getItem("Team 2", "/8"),
  // ]),
  // getItem("Files", "/9", <NotificationOutlined />),
];

function SiderComponent({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = ({ key }) => {
    navigate(key);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      breakpoint="md"
      onCollapse={(collapsed, type) => {
        setCollapsed(collapsed);
      }}
    >
      <Space className="demo-logo-vertical">
        <Avatar />
        {!collapsed && <Typography.Link to="/">LOGO DESIGN</Typography.Link>}
      </Space>
      <Menu
        onClick={handleClick}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={pathname}
        items={items}
        style={{}}
      ></Menu>
    </Sider>
  );
}

export default SiderComponent;
