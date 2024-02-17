import { HomeOutlined, TableOutlined } from "@ant-design/icons";
import { Layout, Menu, Space, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { getMenuItem } from "../utils/customizeMenu";

const { Sider } = Layout;

const items = [
  getMenuItem(
    "Dashboard",
    "grp",
    null,
    [getMenuItem("Ecommers", "/", <HomeOutlined />)],
    "group"
  ),
  getMenuItem(
    "Table",
    "tbl",
    null,
    [getMenuItem("Table", "/table", <TableOutlined />)],
    "group"
  ),
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
      theme="light"
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
        {!collapsed && <Typography.Link to="/" />}
      </Space>
      <Menu
        onClick={handleClick}
        theme="light"
        mode="inline"
        defaultSelectedKeys={pathname}
        items={items}
      />
    </Sider>
  );
}

export default SiderComponent;
