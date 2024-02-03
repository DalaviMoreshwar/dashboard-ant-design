import { Layout } from "antd";
import { useState } from "react";
import FooterComponent from "./FooterComponent";
import ContentComponent from "./ContentComponent";
import HeaderComponent from "./HeaderComponent";
import SiderComponent from "./SiderComponent";

function RootLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SiderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? "80px" : "200px",
          height: "100vh",
        }}
      >
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

export default RootLayout;
