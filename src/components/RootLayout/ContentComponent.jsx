import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import React from "react";
const { Content } = Layout;

function ContentComponent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px 0",
      }}
    >
      <div
        style={{
          overflow: "auto",
          padding: 20,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet />
      </div>
    </Content>
  );
}

export default ContentComponent;
