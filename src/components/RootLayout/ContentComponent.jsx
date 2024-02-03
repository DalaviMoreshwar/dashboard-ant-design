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
        <p>Content</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam
        molestias a voluptates atque quasi dolor, eum enim dolorum asperiores
        obcaecati, amet vero, nihil adipisci impedit consequatur. Eius, fugit
        ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        molestiae ratione saepe, ullam voluptate neque asperiores repellat
        praesentium sequi illum! Ut quam magni architecto corrupti cum tenetur
        minima, soluta quisquam.
      </div>
    </Content>
  );
}

export default ContentComponent;
