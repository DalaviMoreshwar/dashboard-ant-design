import { Layout, theme } from "antd";
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
          height: "100vh",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        content
      </div>
    </Content>
  );
}

export default ContentComponent;
