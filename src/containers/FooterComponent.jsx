import { Layout } from "antd";

const { Footer } = Layout;

function FooterComponent() {
  return <Footer>Dashboard ©{new Date().getFullYear()} </Footer>;
}

export default FooterComponent;
