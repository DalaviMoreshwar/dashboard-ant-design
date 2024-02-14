import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

function Home() {
  return (
    <div>
      <Paragraph>Ecommers Page</Paragraph>
      <Paragraph>
        This page will display widgets, analytics, a map and some graphs.
      </Paragraph>
    </div>
  );
}

export default Home;
